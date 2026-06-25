import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { appLinks } from '@/config/appLinks';
import { fetchCatalogo } from '@/lib/catalog';
import { getCategoryIcon } from '@/lib/icons';

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Catálogo de serviços do ChamadoPro: construção, elétrica, hidráulica, limpeza, tecnologia e mais.',
};

export default async function ServicosPage() {
  const categorias = await fetchCatalogo();

  return (
    <div className="bg-cp-background">
      <section className="border-b border-cp-border bg-cp-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-cp-text-primary sm:text-4xl">
            Serviços disponíveis
          </h1>
          <p className="mt-3 max-w-3xl text-cp-text-secondary">
            Escolha uma categoria para conhecer as especialidades. Para solicitar um profissional,
            acesse o aplicativo ChamadoPro.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categorias.map((cat) => {
            const Icon = getCategoryIcon(cat.icone);
            return (
              <article
                key={cat.slug}
                className="rounded-cp-card border border-cp-border bg-cp-surface p-6 shadow-cp"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cp-accent-soft p-3 text-cp-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-cp-text-primary">
                      <Link href={`/servicos/${cat.slug}`} className="hover:text-cp-accent">
                        {cat.nome}
                      </Link>
                    </h2>
                    <p className="text-sm text-cp-text-secondary">{cat.descricao}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {cat.especialidades.slice(0, 4).map((esp) => (
                    <li key={esp.slug}>
                      <Link
                        href={`/servicos/${cat.slug}/${esp.slug}`}
                        className="text-sm text-cp-text-secondary hover:text-cp-accent"
                      >
                        {esp.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
                {cat.especialidades.length > 4 && (
                  <Link
                    href={`/servicos/${cat.slug}`}
                    className="mt-3 inline-block text-sm font-medium text-cp-accent hover:underline"
                  >
                    Ver todas ({cat.especialidades.length})
                  </Link>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-cp-card border border-cp-border bg-cp-accent-soft p-8 text-center">
          <h2 className="text-xl font-semibold text-cp-text-primary">Não encontrou o serviço?</h2>
          <p className="mt-2 text-cp-text-secondary">
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
      </section>
    </div>
  );
}
