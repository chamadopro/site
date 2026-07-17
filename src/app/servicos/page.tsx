import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { pageContainerClass, pageSectionClass } from '@/components/layout/PageShell';
import { appLinks } from '@/config/appLinks';
import { fetchCatalogo } from '@/lib/catalog';
import { getCategoryIcon } from '@/lib/icons';
import { buildPageMetadata } from '@/lib/metadataHelpers';

export const metadata = buildPageMetadata({
  title: 'Serviços',
  description:
    'Catálogo de serviços do ChamadoPro: construção, elétrica, hidráulica, limpeza, tecnologia e mais.',
  path: '/servicos',
});

export default async function ServicosPage() {
  const categorias = await fetchCatalogo();

  return (
    <div className="bg-cp-background">
      <section className="border-b border-cp-border bg-cp-surface">
        <div className={`${pageContainerClass} py-10 sm:py-12`}>
          <h1 className="text-3xl font-bold tracking-[-0.02em] text-cp-text-primary sm:text-4xl">
            Serviços disponíveis
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-cp-text-secondary sm:mt-4 sm:text-lg">
            Escolha uma categoria para conhecer as especialidades. Para solicitar um profissional,
            acesse o aplicativo ChamadoPro.
          </p>
        </div>
      </section>

      <section className={pageSectionClass}>
        <div className={pageContainerClass}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
            {categorias.map((cat) => {
              const Icon = getCategoryIcon(cat.icone);
              return (
                <article
                  key={cat.slug}
                  className="rounded-2xl border border-cp-border bg-white p-5 sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-brand-orange-light p-3 text-brand-orange">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="page-card-title">
                        <Link href={`/servicos/${cat.slug}`} className="hover:text-brand-orange">
                          {cat.nome}
                        </Link>
                      </h2>
                      <p className="page-body mt-1">
                        {cat.descricao}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {cat.especialidades.slice(0, 4).map((esp) => (
                      <li key={esp.slug}>
                        <Link
                          href={`/servicos/${cat.slug}/${esp.slug}`}
                          className="text-sm text-cp-text-secondary hover:text-brand-orange"
                        >
                          {esp.nome}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {cat.especialidades.length > 4 && (
                    <Link
                      href={`/servicos/${cat.slug}`}
                      className="mt-3 inline-block text-sm font-medium text-brand-orange hover:underline"
                    >
                      Ver todas ({cat.especialidades.length})
                    </Link>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-brand-orange-border/40 bg-brand-orange-light/20 p-5 text-center sm:mt-10 sm:p-6 lg:mt-12 lg:p-8">
            <h2 className="page-h2 text-cp-text-primary">
              Não encontrou o serviço?
            </h2>
            <p className="page-body mt-2">
              Entre no aplicativo ChamadoPro e descreva sua necessidade para receber orçamentos da
              região.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={appLinks.entrarParaPedirServico()} external>
                Entrar no app
              </ButtonLink>
              <ButtonLink href={appLinks.cadastrarCliente} variant="outline" external>
                Criar conta
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
