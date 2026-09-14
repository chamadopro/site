import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { ButtonLink } from '@/components/ui/Button';
import { pageContainerClass, pageSectionClass } from '@/components/layout/PageShell';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { ServicePageContent } from '@/components/servicos/ServicePageContent';
import { appLinks } from '@/config/appLinks';
import {
  CATALOGO_ESTATICO,
  SPECIALTY_ALIASES,
  fetchCatalogo,
  findCategoria,
  findEspecialidadeBySlug,
  getAllSpecialties,
} from '@/lib/catalog';
import { CategoryIcon } from '@/lib/icons';
import { buildPageMetadata } from '@/lib/metadataHelpers';
import { getEspecialidadeContent, getSpecialtyMetaDescription, servicoPath } from '@/lib/seoContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = CATALOGO_ESTATICO.map((cat) => ({ slug: cat.slug }));
  const specialties = getAllSpecialties(CATALOGO_ESTATICO).map(({ especialidade }) => ({
    slug: especialidade.slug,
  }));
  return [...categories, ...specialties];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Se for alias conhecido, não precisa indexar o alias (ele sofre 301)
  if (SPECIALTY_ALIASES[slug] && SPECIALTY_ALIASES[slug] !== slug) {
    const canonical = SPECIALTY_ALIASES[slug];
    return buildPageMetadata({
      title: `${slug} — Orçamentos com Pagamento Protegido`,
      description: `Contrate ${slug} pelo ChamadoPro com pagamento protegido.`,
      path: `/servicos/${canonical}`,
    });
  }

  const catalogo = await fetchCatalogo();

  // 1. Caso seja uma Categoria (ex: /servicos/construcao-reforma)
  const categoria = findCategoria(catalogo, slug);
  if (categoria) {
    const topEspecialidades = categoria.especialidades.map((e) => e.nome).join(', ');
    return buildPageMetadata({
      title: `${categoria.nome} — Serviços e Profissionais Autônomos`,
      description: `Encontre profissionais de ${categoria.nome.toLowerCase()} no ChamadoPro: ${topEspecialidades}. Compare orçamentos gratuitos com pagamento protegido.`,
      path: `/servicos/${categoria.slug}`,
    });
  }

  // 2. Caso seja uma Especialidade direta (ex: /servicos/pedreiro, /servicos/encanador)
  const foundSpecialty = findEspecialidadeBySlug(catalogo, slug);
  if (foundSpecialty) {
    const { categoria: cat, especialidade: esp } = foundSpecialty;
    const content = getEspecialidadeContent(esp.slug, esp.nome, esp.descricao, cat.nome);
    const metaDescription = getSpecialtyMetaDescription(
      esp.nome,
      cat.nome,
      content.paragraphs[0],
      content.metaDescription
    );
    return buildPageMetadata({
      title: content.metaTitle ?? `${esp.nome} — Orçamentos com Pagamento Protegido`,
      description: metaDescription,
      path: servicoPath(esp.slug),
    });
  }

  return { title: 'Serviço não encontrado' };
}

export default async function ServicoSlugPage({ params }: PageProps) {
  const { slug } = await params;

  // Redirecionamento 301 permanente para aliases conhecidos (ex: /servicos/eletricista -> /servicos/eletricista-residencial)
  if (SPECIALTY_ALIASES[slug] && SPECIALTY_ALIASES[slug] !== slug) {
    permanentRedirect(`/servicos/${SPECIALTY_ALIASES[slug]}`);
  }

  const catalogo = await fetchCatalogo();

  // 1. RENDERIZAR CATEGORIA
  const categoria = findCategoria(catalogo, slug);
  if (categoria) {
    const breadcrumbs = [
      { name: 'Início', path: '/' },
      { name: 'Serviços', path: '/servicos' },
      { name: categoria.nome, path: `/servicos/${categoria.slug}` },
    ];

    return (
      <>
        <BreadcrumbJsonLd items={breadcrumbs} />
        <div className="bg-cp-background">
          <section className="border-b border-cp-border bg-cp-surface">
            <div className={`${pageContainerClass} py-10 sm:py-12`}>
              <nav className="text-sm text-cp-text-secondary" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-brand-orange">
                  Início
                </Link>
                <span className="mx-2">/</span>
                <Link href="/servicos" className="hover:text-brand-orange">
                  Serviços
                </Link>
                <span className="mx-2">/</span>
                <span className="text-cp-text-primary font-medium">{categoria.nome}</span>
              </nav>

              <div className="mt-6 flex items-start gap-4">
                <div className="rounded-xl bg-brand-orange-light p-4 text-brand-orange shrink-0">
                  <CategoryIcon name={categoria.icone} className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-[-0.02em] text-cp-text-primary sm:text-4xl">
                    {categoria.nome}
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-cp-text-secondary sm:text-lg">
                    {categoria.descricao}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={pageSectionClass}>
            <div className={pageContainerClass}>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
                {categoria.especialidades.map((esp) => (
                  <Link
                    key={esp.slug}
                    href={`/servicos/${esp.slug}`}
                    className="group rounded-2xl border border-cp-border bg-white p-5 transition hover:border-brand-orange/40 hover:shadow-sm"
                  >
                    <h2 className="page-card-title group-hover:text-brand-orange">
                      {esp.nome}
                    </h2>
                    <p className="page-body mt-2 line-clamp-3">
                      {esp.descricao}
                    </p>
                    <span className="mt-3 inline-block text-xs font-semibold text-brand-orange group-hover:underline">
                      Ver detalhes e orçamentos →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-cp-border bg-white p-5 sm:mt-10 sm:p-6 lg:mt-12 lg:p-8">
                <h2 className="page-h2 text-cp-text-primary">
                  Precisa de serviços de {categoria.nome.toLowerCase()}?
                </h2>
                <p className="page-body mt-2 max-w-2xl">
                  Publique gratuitamente no aplicativo ChamadoPro para receber orçamentos de
                  profissionais avaliados na sua cidade com pagamento protegido em custódia.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={appLinks.entrarParaPedirServico()} external>
                    Solicitar no app
                  </ButtonLink>
                  <ButtonLink href={appLinks.cadastroPrestador} variant="outline" external>
                    Sou prestador desta área
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // 2. RENDERIZAR ESPECIALIDADE
  const foundSpecialty = findEspecialidadeBySlug(catalogo, slug);
  if (foundSpecialty) {
    const { categoria: cat, especialidade: esp, isAlias, canonicalSlug } = foundSpecialty;

    // Se o usuário acessou por alias, redireciona 301 para o canônico
    if (isAlias && canonicalSlug) {
      permanentRedirect(`/servicos/${canonicalSlug}`);
    }

    const content = getEspecialidadeContent(
      esp.slug,
      esp.nome,
      esp.descricao,
      cat.nome
    );
    const path = servicoPath(esp.slug);

    const metaDescription = getSpecialtyMetaDescription(
      esp.nome,
      cat.nome,
      content.paragraphs[0],
      content.metaDescription
    );

    return (
      <ServicePageContent
        breadcrumbs={[
          { name: 'Início', path: '/' },
          { name: 'Serviços', path: '/servicos' },
          { name: cat.nome, path: `/servicos/${cat.slug}` },
          { name: esp.nome, path },
        ]}
        h1={content.h1 ?? `${esp.nome} — orçamentos com pagamento seguro`}
        intro={esp.descricao}
        paragraphs={content.paragraphs}
        faq={content.faq}
        categoria={cat}
        especialidade={esp}
        servicePath={path}
        serviceName={esp.nome}
        serviceDescription={metaDescription}
        showCityLinks={false}
      />
    );
  }

  notFound();
}
