import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { pageContainerClass, pageSectionClass } from '@/components/layout/PageShell';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { appLinks } from '@/config/appLinks';
import { audienceClasses } from '@/lib/audienceColors';
import type { CatalogCategoria, CatalogEspecialidade } from '@/lib/catalog';
import type { Cidade } from '@/lib/cidades';
import { CIDADES_FASE_1 } from '@/lib/cidades';
import type { FaqItem } from '@/lib/seoContent';
import { localServicoPath, servicoPath } from '@/lib/seoContent';
import { cn } from '@/lib/cn';

interface Breadcrumb {
  name: string;
  path: string;
}

interface ServicePageContentProps {
  breadcrumbs: Breadcrumb[];
  h1: string;
  intro?: string | null;
  paragraphs: string[];
  faq: FaqItem[];
  categoria: CatalogCategoria;
  especialidade: CatalogEspecialidade;
  servicePath: string;
  serviceName: string;
  serviceDescription: string;
  areaServed?: string;
  cidade?: Cidade;
  showCityLinks?: boolean;
  showRelatedSpecialties?: boolean;
}

export function ServicePageContent({
  breadcrumbs,
  h1,
  intro,
  paragraphs,
  faq,
  categoria,
  especialidade,
  servicePath,
  serviceName,
  serviceDescription,
  areaServed,
  cidade,
  showCityLinks = false,
  showRelatedSpecialties = true,
}: ServicePageContentProps) {
  const relacionadas = categoria.especialidades.filter((e) => e.slug !== especialidade.slug);
  const client = audienceClasses.client;
  const provider = audienceClasses.provider;

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ServiceJsonLd
        name={serviceName}
        description={serviceDescription}
        path={servicePath}
        areaServed={areaServed}
      />
      <FaqJsonLd items={faq} />

      <div className="bg-cp-background">
        <section className="border-b border-cp-border bg-cp-surface">
          <div className={`${pageContainerClass} py-10 sm:py-12`}>
            <nav className="text-sm text-cp-text-secondary" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, i) => (
                <span key={crumb.path}>
                  {i > 0 && <span className="mx-2">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.path} className={cn('hover:underline', client.text)}>
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-cp-text-primary">{crumb.name}</span>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="mt-6 text-3xl font-bold tracking-[-0.02em] text-cp-text-primary sm:text-4xl">
              {h1}
            </h1>
            {intro && (
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-cp-text-secondary sm:mt-4 sm:text-lg">
                {intro}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={appLinks.entrarParaPedirServico()} size="lg" external>
                Solicitar no app
              </ButtonLink>
              <ButtonLink href={appLinks.cadastroPrestador} variant="brand" size="lg" external>
                Sou prestador desta área
              </ButtonLink>
            </div>
            <p className="page-body mt-4">
              Os pedidos são publicados no aplicativo ChamadoPro, após login ou cadastro.
            </p>
          </div>
        </section>

        <section className={pageSectionClass}>
          <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-10">
            <h2 className="page-h2 text-cp-text-primary">
              {cidade
                ? `${especialidade.nome} em ${cidade.nome}`
                : `Como contratar ${especialidade.nome.toLowerCase()} pelo ChamadoPro`}
            </h2>
            <div className="page-body mt-4 space-y-4">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            {faq.length > 0 && (
              <div className="mt-10 sm:mt-12">
                <h2 className="page-h2 text-cp-text-primary">
                  Perguntas frequentes
                </h2>
                <dl className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
                  {faq.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-2xl border border-cp-border bg-white p-4 sm:p-5"
                    >
                      <dt className="page-card-title">
                        {item.question}
                      </dt>
                      <dd className="page-body mt-2">
                        {item.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {showCityLinks && !cidade && (
              <div className="mt-10 sm:mt-12">
                <h2 className="page-h2 text-cp-text-primary">
                  {especialidade.nome} por cidade
                </h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {CIDADES_FASE_1.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={localServicoPath(categoria.slug, especialidade.slug, c.slug)}
                        className={cn('text-sm hover:underline', client.text)}
                      >
                        {especialidade.nome} em {c.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {cidade && (
              <div className="mt-10 sm:mt-12">
                <h2 className="page-h2 text-cp-text-primary">
                  {especialidade.nome} em outras cidades
                </h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {CIDADES_FASE_1.filter((c) => c.slug !== cidade.slug).map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={localServicoPath(categoria.slug, especialidade.slug, c.slug)}
                        className={cn('text-sm hover:underline', client.text)}
                      >
                        {c.nome}, {c.uf}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm">
                  <Link
                    href={servicoPath(categoria.slug, especialidade.slug)}
                    className={cn('hover:underline', provider.text)}
                  >
                    Ver página nacional de {especialidade.nome}
                  </Link>
                </p>
              </div>
            )}

            {showRelatedSpecialties && relacionadas.length > 0 && (
              <div className="mt-10 sm:mt-12">
                <h2 className="page-h2 text-cp-text-primary">
                  Serviços relacionados
                </h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {relacionadas.map((esp) => (
                    <li key={esp.slug}>
                      <Link
                        href={
                          cidade
                            ? localServicoPath(categoria.slug, esp.slug, cidade.slug)
                            : servicoPath(categoria.slug, esp.slug)
                        }
                        className={cn('text-sm hover:underline', client.text)}
                      >
                        {esp.nome}
                        {cidade ? ` em ${cidade.nome}` : ''}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
