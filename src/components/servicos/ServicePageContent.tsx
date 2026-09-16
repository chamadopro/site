import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { pageContainerClass, pageSectionClass } from '@/components/layout/PageShell';
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from '@/components/seo/JsonLd';
import { appLinks } from '@/config/appLinks';
import { audienceClasses } from '@/lib/audienceColors';
import type { CatalogCategoria, CatalogEspecialidade } from '@/lib/catalog';
import type { Cidade } from '@/lib/cidades';
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
  showRelatedSpecialties = true,
}: ServicePageContentProps) {
  const relacionadas = categoria.especialidades.filter((e) => e.slug !== especialidade.slug);
  const client = audienceClasses.client;

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
          <div
            className={cn(
              pageContainerClass,
              intro ? 'py-4 sm:py-5 lg:py-6' : 'py-3.5 sm:py-4 lg:py-5',
            )}
          >
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

            <h1 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-cp-text-primary sm:mt-3.5 sm:text-3xl lg:text-[2rem]">
              {h1}
            </h1>
            {intro ? (
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cp-text-secondary sm:mt-2.5 sm:text-base">
                {intro}
              </p>
            ) : null}

            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
              <ButtonLink href={appLinks.entrarParaPedirServico()} size="lg" external>
                Solicitar no app
              </ButtonLink>
              <ButtonLink href={appLinks.cadastroPrestador} variant="brand" size="lg" external>
                Sou prestador desta área
              </ButtonLink>
            </div>
            <p className="page-body mt-3">
              Os pedidos são publicados no aplicativo ChamadoPro, após login ou cadastro.
            </p>
          </div>
        </section>

        <section className={pageSectionClass}>
          <div className={pageContainerClass}>
            <div className="max-w-3xl space-y-6 sm:space-y-8">
              <article className="rounded-2xl border border-cp-border bg-white p-5 sm:p-6 lg:p-8">
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
              </article>

              {faq.length > 0 ? (
                <div>
                  <h2 className="page-h2 text-cp-text-primary">Perguntas frequentes</h2>
                  <dl className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                    {faq.map((item) => (
                      <div
                        key={item.question}
                        className="rounded-2xl border border-cp-border bg-white p-4 sm:p-5"
                      >
                        <dt className="page-card-title">{item.question}</dt>
                        <dd className="page-body mt-2">{item.answer}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}

              {!cidade ? (
                <div className="rounded-2xl border border-cp-border bg-white p-5 sm:p-6">
                  <h2 className="page-h2 text-cp-text-primary">Atendimento em todo o Brasil</h2>
                  <p className="page-body mt-2">
                    O ChamadoPro conecta clientes e profissionais autônomos em qualquer cidade do
                    país. Ao publicar seu chamado no aplicativo, informe sua localidade para receber
                    orçamentos de quem atende seu bairro ou região com pagamento protegido em
                    custódia.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-cp-border bg-white p-5 sm:p-6">
                  <p className="text-sm">
                    <Link
                      href={servicoPath(especialidade.slug)}
                      className={cn('font-semibold hover:underline', client.text)}
                    >
                      ← Ver página principal de {especialidade.nome}
                    </Link>
                  </p>
                </div>
              )}

              {showRelatedSpecialties && relacionadas.length > 0 ? (
                <div>
                  <h2 className="page-h2 text-cp-text-primary">Serviços relacionados</h2>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-3">
                    {relacionadas.map((esp) => (
                      <li key={esp.slug}>
                        <Link
                          href={
                            cidade
                              ? localServicoPath(categoria.slug, esp.slug, cidade.slug)
                              : servicoPath(categoria.slug, esp.slug)
                          }
                          className={cn(
                            'flex items-center justify-between rounded-xl border border-cp-border bg-white px-4 py-3 text-sm transition-colors',
                            'hover:border-brand-orange/40 hover:text-brand-orange',
                            client.text,
                          )}
                        >
                          <span>
                            {esp.nome}
                            {cidade ? ` em ${cidade.nome}` : ''}
                          </span>
                          <span className="text-xs text-brand-orange/60" aria-hidden>
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
