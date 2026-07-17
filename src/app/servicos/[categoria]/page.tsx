import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/ui/Button';
import { pageContainerClass, pageSectionClass } from '@/components/layout/PageShell';
import { appLinks } from '@/config/appLinks';
import { CATALOGO_ESTATICO, fetchCatalogo, findCategoria } from '@/lib/catalog';
import { getCategoryIcon } from '@/lib/icons';
import { buildPageMetadata } from '@/lib/metadataHelpers';

interface PageProps {
  params: Promise<{ categoria: string }>;
}

export async function generateStaticParams() {
  return CATALOGO_ESTATICO.map((cat) => ({ categoria: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categoria: slug } = await params;
  const catalogo = await fetchCatalogo();
  const categoria = findCategoria(catalogo, slug);
  if (!categoria) return { title: 'Categoria não encontrada' };
  return buildPageMetadata({
    title: categoria.nome,
    description: categoria.descricao ?? `Profissionais de ${categoria.nome} no ChamadoPro.`,
    path: `/servicos/${categoria.slug}`,
  });
}

export default async function CategoriaPage({ params }: PageProps) {
  const { categoria: slug } = await params;
  const catalogo = await fetchCatalogo();
  const categoria = findCategoria(catalogo, slug);
  if (!categoria) notFound();

  const Icon = getCategoryIcon(categoria.icone);

  return (
    <div className="bg-cp-background">
      <section className="border-b border-cp-border bg-cp-surface">
        <div className={`${pageContainerClass} py-10 sm:py-12`}>
          <nav className="text-sm text-cp-text-secondary">
            <Link href="/servicos" className="hover:text-brand-orange">
              Serviços
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cp-text-primary">{categoria.nome}</span>
          </nav>
          <div className="mt-6 flex items-start gap-4">
            <div className="rounded-xl bg-brand-orange-light p-4 text-brand-orange">
              <Icon className="h-8 w-8" />
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
                href={`/servicos/${categoria.slug}/${esp.slug}`}
                className="rounded-2xl border border-cp-border bg-white p-4 transition hover:border-brand-orange/40 sm:p-5"
              >
                <h2 className="page-card-title">
                  {esp.nome}
                </h2>
                <p className="page-body mt-2 line-clamp-3">
                  {esp.descricao}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-cp-border bg-white p-5 sm:mt-10 sm:p-6 lg:mt-12 lg:p-8">
            <h2 className="page-h2 text-cp-text-primary">
              Precisa de {categoria.nome.toLowerCase()}?
            </h2>
            <p className="page-body mt-2">
              Entre no aplicativo ChamadoPro para publicar seu pedido e receber orçamentos de
              prestadores próximos.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
