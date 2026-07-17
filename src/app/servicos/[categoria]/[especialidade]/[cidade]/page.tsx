import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePageContent } from '@/components/servicos/ServicePageContent';
import { CIDADES_FASE_1, findCidade } from '@/lib/cidades';
import {
  CATALOGO_ESTATICO,
  fetchCatalogo,
  findEspecialidade,
  getAllLocalPaths,
} from '@/lib/catalog';
import { buildPageMetadata } from '@/lib/metadataHelpers';
import { getLocalContent, localServicoPath } from '@/lib/seoContent';

interface PageProps {
  params: Promise<{ categoria: string; especialidade: string; cidade: string }>;
}

export async function generateStaticParams() {
  return getAllLocalPaths(
    CATALOGO_ESTATICO,
    CIDADES_FASE_1.map((c) => c.slug)
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoria, especialidade, cidade: cidadeSlug } = await params;
  const catalogo = await fetchCatalogo();
  const found = findEspecialidade(catalogo, categoria, especialidade);
  const cidade = findCidade(cidadeSlug);
  if (!found || !cidade) return { title: 'Serviço não encontrado' };
  const { categoria: cat, especialidade: esp } = found;
  const content = getLocalContent(esp.slug, esp.nome, esp.descricao, cat.nome, cidade);
  const path = localServicoPath(cat.slug, esp.slug, cidade.slug);

  return buildPageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path,
  });
}

export default async function EspecialidadeCidadePage({ params }: PageProps) {
  const { categoria: catSlug, especialidade: espSlug, cidade: cidadeSlug } = await params;
  const catalogo = await fetchCatalogo();
  const found = findEspecialidade(catalogo, catSlug, espSlug);
  const cidade = findCidade(cidadeSlug);
  if (!found || !cidade) notFound();

  const { categoria, especialidade } = found;
  const content = getLocalContent(
    especialidade.slug,
    especialidade.nome,
    especialidade.descricao,
    categoria.nome,
    cidade
  );
  const path = localServicoPath(categoria.slug, especialidade.slug, cidade.slug);

  return (
    <ServicePageContent
      breadcrumbs={[
        { name: 'Serviços', path: '/servicos' },
        { name: categoria.nome, path: `/servicos/${categoria.slug}` },
        {
          name: especialidade.nome,
          path: `/servicos/${categoria.slug}/${especialidade.slug}`,
        },
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
