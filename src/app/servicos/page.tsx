import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { pageContainerClass, pageSectionClass } from '@/components/layout/PageShell';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { appLinks } from '@/config/appLinks';
import { fetchCatalogo } from '@/lib/catalog';
import { CategoryIcon } from '@/lib/icons';
import { buildPageMetadata } from '@/lib/metadataHelpers';

export const metadata = buildPageMetadata({
  title: 'Serviços Disponíveis e Profissionais Autônomos',
  description:
    'Consulte o catálogo de serviços do ChamadoPro: reformas, eletricista, encanador, climatização, limpeza, montador de móveis e mais. Solicite orçamentos protegidos.',
  path: '/servicos',
});

export default async function ServicosPage() {
  const categorias = await fetchCatalogo();
  const breadcrumbs = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="bg-cp-background">
        <section className="border-b border-cp-border bg-cp-surface">
          <div className={`${pageContainerClass} py-4 sm:py-5 lg:py-6`}>
            <nav className="text-sm text-cp-text-secondary" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-orange">
                Início
              </Link>
              <span className="mx-2">/</span>
              <span className="text-cp-text-primary font-medium">Serviços</span>
            </nav>
            <h1 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-cp-text-primary sm:mt-3.5 sm:text-3xl lg:text-[2rem]">
              Serviços e Especialidades
            </h1>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cp-text-secondary sm:mt-2.5 sm:text-base">
              Explore o diretório de serviços do ChamadoPro. Encontre profissionais qualificados para
              sua casa ou empresa e receba orçamentos gratuitos com pagamento protegido em custódia.
            </p>
          </div>
        </section>

        <section className={pageSectionClass}>
          <div className={pageContainerClass}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
              {categorias.map((cat) => (
                <article
                  key={cat.slug}
                  className="flex flex-col justify-between rounded-2xl border border-cp-border bg-white p-5 sm:p-6"
                >
                  <div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-brand-orange-light p-3 text-brand-orange shrink-0">
                        <CategoryIcon name={cat.icone} className="h-6 w-6" />
                      </div>
                        <div>
                          <h2 className="page-card-title text-base sm:text-lg">
                            <Link href={`/servicos/${cat.slug}`} className="hover:text-brand-orange">
                              {cat.nome}
                            </Link>
                          </h2>
                          <p className="page-body mt-1 text-xs sm:text-sm line-clamp-2">
                            {cat.descricao}
                          </p>
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2 border-t border-cp-border/50 pt-3">
                        {cat.especialidades.map((esp) => (
                          <li key={esp.slug}>
                            <Link
                              href={`/servicos/${esp.slug}`}
                              className="text-sm text-cp-text-secondary hover:text-brand-orange transition-colors flex items-center justify-between"
                            >
                              <span>{esp.nome}</span>
                              <span className="text-xs text-brand-orange/60 font-mono">→</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-cp-border/40">
                      <Link
                        href={`/servicos/${cat.slug}`}
                        className="text-xs font-semibold uppercase tracking-wider text-brand-orange hover:underline"
                      >
                        Ver categoria completa ({cat.especialidades.length})
                      </Link>
                    </div>
                  </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-brand-orange-border/40 bg-brand-orange-light/20 p-5 text-center sm:mt-10 sm:p-6 lg:mt-12 lg:p-8">
              <h2 className="page-h2 text-cp-text-primary">
                Não encontrou exatamente o que procura?
              </h2>
              <p className="page-body mt-2 max-w-xl mx-auto">
                No aplicativo ChamadoPro, você pode descrever qualquer serviço por texto, áudio ou fotos.
                Nossa plataforma conecta você aos profissionais certos na sua cidade.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href={appLinks.entrarParaPedirServico()} external>
                  Solicitar no app
                </ButtonLink>
                <ButtonLink href={appLinks.cadastroPrestador} variant="outline" external>
                  Quero trabalhar como prestador
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
