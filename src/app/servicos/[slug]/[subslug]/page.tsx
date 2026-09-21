import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { ServicePageContent } from '@/components/servicos/ServicePageContent';
import { findCidade } from '@/lib/cidades';
import {
  CATALOGO_ESTATICO,
  SPECIALTY_ALIASES,
  fetchCatalogo,
  findCategoria,
  findEspecialidade,
  findEspecialidadeBySlug,
  getAllEspecialidadePaths,
} from '@/lib/catalog';
import { buildPageMetadata } from '@/lib/metadataHelpers';
import { getLocalContent, localServicoPath } from '@/lib/seoContent';
import { absoluteUrl } from '@/lib/siteConfig';

interface PageProps {
  params: Promise<{ slug: string; subslug: string }>;
}

export async function generateStaticParams() {
  const params: Array<{ slug: string; subslug: string }> = [];

  // Compatibilidade e redirecionamento de URLs antigas de 3 níveis: /servicos/[categoria]/[especialidade]
  for (const { categoria, especialidade } of getAllEspecialidadePaths(CATALOGO_ESTATICO)) {
    params.push({ slug: categoria, subslug: especialidade });
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, subslug } = await params;
  const catalogo = await fetchCatalogo();

  // 1. Se for o padrão antigo [categoria]/[especialidade], o canonical aponta para o novo /servicos/[especialidade]
  const foundLegacy = findEspecialidade(catalogo, slug, subslug);
  if (foundLegacy) {
    const { especialidade: esp } = foundLegacy;
    return buildPageMetadata({
      title: `${esp.nome} — Orçamentos com Pagamento Protegido`,
      description: `Contrate ${esp.nome.toLowerCase()} pelo ChamadoPro com pagamento seguro.`,
      path: `/servicos/${esp.slug}`,
    });
  }

  // 2. Se for especialidade + cidade (ex: /servicos/pedreiro/sao-paulo)
  // Como não há profissionais reais listados por cidade, configuramos noindex e canonical para a página nacional
  const resolvedSpecialtySlug = SPECIALTY_ALIASES[slug] || slug;
  const foundSpecialty = findEspecialidadeBySlug(catalogo, resolvedSpecialtySlug);
  const cidade = findCidade(subslug);

  if (foundSpecialty && cidade) {
    const { especialidade: esp } = foundSpecialty;
    const content = getLocalContent(
      esp.slug,
      esp.nome,
      esp.descricao,
      foundSpecialty.categoria.nome,
      cidade,
    );

    // Soft landing: OG/Twitter via helper; canônico nacional + noindex
    return {
      ...buildPageMetadata({
        title: content.metaTitle,
        description: content.metaDescription,
        path: `/servicos/${esp.slug}/${cidade.slug}`,
        ogTitle: `${esp.nome} em ${cidade.nome} | ChamadoPro`,
      }),
      alternates: {
        canonical: absoluteUrl(`/servicos/${esp.slug}`),
      },
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return { title: 'Página não encontrada', robots: { index: false, follow: true } };
}

export default async function ServicoSubslugPage({ params }: PageProps) {
  const { slug, subslug } = await params;
  const catalogo = await fetchCatalogo();

  // 1. REDIRECIONAMENTO 301 DE ROTAS LEGADAS: /servicos/[categoria]/[especialidade] -> /servicos/[especialidade]
  const isCategory = findCategoria(catalogo, slug);
  if (isCategory) {
    const foundLegacy = findEspecialidade(catalogo, slug, subslug);
    if (foundLegacy) {
      permanentRedirect(`/servicos/${foundLegacy.especialidade.slug}`);
    }
  }

  // 2. REDIRECIONAMENTO DE ALIASES LOCAIS: /servicos/eletricista/sao-paulo -> /servicos/eletricista-residencial/sao-paulo
  if (SPECIALTY_ALIASES[slug]) {
    permanentRedirect(`/servicos/${SPECIALTY_ALIASES[slug]}/${subslug}`);
  }

  // 3. RENDERIZAÇÃO DE PÁGINA LOCAL: /servicos/[especialidade]/[cidade]
  const foundSpecialty = findEspecialidadeBySlug(catalogo, slug);
  const cidade = findCidade(subslug);

  if (foundSpecialty && cidade) {
    const { categoria, especialidade } = foundSpecialty;
    const content = getLocalContent(
      especialidade.slug,
      especialidade.nome,
      especialidade.descricao,
      categoria.nome,
      cidade
    );
    const path = localServicoPath(especialidade.slug, cidade.slug);

    return (
      <ServicePageContent
        breadcrumbs={[
          { name: 'Início', path: '/' },
          { name: 'Serviços', path: '/servicos' },
          { name: categoria.nome, path: `/servicos/${categoria.slug}` },
          { name: especialidade.nome, path: `/servicos/${especialidade.slug}` },
          { name: cidade.nome, path },
        ]}
        h1={content.h1}
        paragraphs={content.paragraphs}
        faq={content.faq}
        categoria={categoria}
        especialidade={especialidade}
        servicePath={path}
        serviceName={`${especialidade.nome} em ${cidade.nome}`}
        serviceDescription={content.metaDescription}
        areaServed={cidade.nome}
        cidade={cidade}
      />
    );
  }

  notFound();
}
