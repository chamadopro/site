import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/ui/Button';
import { appLinks } from '@/config/appLinks';
import { CATALOGO_ESTATICO, fetchCatalogo, findCategoria } from '@/lib/catalog';
import { getCategoryIcon } from '@/lib/icons';

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
  return {
    title: categoria.nome,
    description: categoria.descricao ?? `Profissionais de ${categoria.nome} no ChamadoPro.`,
  };
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
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="text-sm text-cp-text-secondary">
            <Link href="/servicos" className="hover:text-cp-accent">
              Serviços
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cp-text-primary">{categoria.nome}</span>
          </nav>
          <div className="mt-6 flex items-start gap-4">
            <div className="rounded-xl bg-cp-accent-soft p-4 text-cp-accent">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-cp-text-primary sm:text-4xl">
                {categoria.nome}
              </h1>
              <p className="mt-3 max-w-3xl text-cp-text-secondary">{categoria.descricao}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoria.especialidades.map((esp) => (
            <Link
              key={esp.slug}
              href={`/servicos/${categoria.slug}/${esp.slug}`}
              className="rounded-cp-card border border-cp-border bg-cp-surface p-5 shadow-cp transition hover:border-cp-accent/40"
            >
              <h2 className="font-semibold text-cp-text-primary">{esp.nome}</h2>
              <p className="mt-2 text-sm text-cp-text-secondary line-clamp-3">
                {esp.descricao}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-cp-card border border-cp-border bg-cp-surface p-6">
          <h2 className="text-lg font-semibold text-cp-text-primary">
            Precisa de {categoria.nome.toLowerCase()}?
          </h2>
          <p className="mt-2 text-sm text-cp-text-secondary">
            Entre no aplicativo ChamadoPro para publicar seu pedido e receber orçamentos de
            prestadores próximos.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
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
