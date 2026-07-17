import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePageContent } from '@/components/servicos/ServicePageContent';
import {
  CATALOGO_ESTATICO,
  fetchCatalogo,
  findEspecialidade,
  getAllEspecialidadePaths,
} from '@/lib/catalog';
import { buildPageMetadata } from '@/lib/metadataHelpers';
import { getEspecialidadeContent, servicoPath } from '@/lib/seoContent';

interface PageProps {
  params: Promise<{ categoria: string; especialidade: string }>;
}

export async function generateStaticParams() {
  return getAllEspecialidadePaths(CATALOGO_ESTATICO).map(({ categoria, especialidade }) => ({
    categoria,
    especialidade,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoria, especialidade } = await params;
  const catalogo = await fetchCatalogo();
  const found = findEspecialidade(catalogo, categoria, especialidade);
  if (!found) return { title: 'Serviço não encontrado' };
  const { categoria: cat, especialidade: esp } = found;
  const content = getEspecialidadeContent(esp.slug, esp.nome, esp.descricao, cat.nome);
  const path = servicoPath(cat.slug, esp.slug);

  return buildPageMetadata({
    title: `${esp.nome} — encontre profissionais na sua região`,
    description: content.paragraphs[0].slice(0, 160),
    path,
  });
}

export default async function EspecialidadePage({ params }: PageProps) {
  const { categoria: catSlug, especialidade: espSlug } = await params;
  const catalogo = await fetchCatalogo();
  const found = findEspecialidade(catalogo, catSlug, espSlug);
  if (!found) notFound();

  const { categoria, especialidade } = found;
  const content = getEspecialidadeContent(
    especialidade.slug,
    especialidade.nome,
    especialidade.descricao,
    categoria.nome
  );
  const path = servicoPath(categoria.slug, especialidade.slug);

  return (
    <ServicePageContent
      breadcrumbs={[
        { name: 'Serviços', path: '/servicos' },
        { name: categoria.nome, path: `/servicos/${categoria.slug}` },
        { name: especialidade.nome, path },
      ]}
      h1={`${especialidade.nome} — encontre profissionais na sua região`}
      intro={especialidade.descricao}
      paragraphs={content.paragraphs}
      faq={content.faq}
      categoria={categoria}
      especialidade={especialidade}
      servicePath={path}
      serviceName={especialidade.nome}
      serviceDescription={content.paragraphs[0]}
      showCityLinks
    />
  );
}
