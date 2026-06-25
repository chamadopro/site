import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/ui/Button';
import { appLinks } from '@/config/appLinks';
import {
  CATALOGO_ESTATICO,
  fetchCatalogo,
  findEspecialidade,
  getAllEspecialidadePaths,
} from '@/lib/catalog';

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
  const { especialidade: esp } = found;
  return {
    title: `${esp.nome} — encontre profissionais na sua região`,
    description:
      esp.descricao ??
      `Contrate ${esp.nome.toLowerCase()} com segurança pelo ChamadoPro. Compare orçamentos e pague com proteção.`,
  };
}

export default async function EspecialidadePage({ params }: PageProps) {
  const { categoria: catSlug, especialidade: espSlug } = await params;
  const catalogo = await fetchCatalogo();
  const found = findEspecialidade(catalogo, catSlug, espSlug);
  if (!found) notFound();

  const { categoria, especialidade } = found;
  const relacionadas = categoria.especialidades.filter((e) => e.slug !== especialidade.slug);

  return (
    <div className="bg-cp-background">
      <section className="border-b border-cp-border bg-cp-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <nav className="text-sm text-cp-text-secondary">
            <Link href="/servicos" className="hover:text-cp-accent">
              Serviços
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/servicos/${categoria.slug}`} className="hover:text-cp-accent">
              {categoria.nome}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-cp-text-primary">{especialidade.nome}</span>
          </nav>
          <h1 className="mt-6 text-3xl font-bold text-cp-text-primary sm:text-4xl">
            {especialidade.nome} — encontre profissionais na sua região
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-cp-text-secondary">
            {especialidade.descricao}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLinks.entrarParaPedirServico()} size="lg" external>
              Entrar e solicitar no app
            </ButtonLink>
            <ButtonLink href={appLinks.cadastroPrestador} variant="outline" size="lg" external>
              Sou prestador desta área
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-cp-text-secondary">
            Os pedidos são publicados dentro do aplicativo ChamadoPro, após login ou cadastro.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-cp-text-primary">
          Como contratar {especialidade.nome.toLowerCase()} pelo ChamadoPro
        </h2>
        <div className="mt-4 space-y-4 text-cp-text-secondary leading-relaxed">
          <p>
            No aplicativo ChamadoPro você descreve o que precisa — reforma, reparo, instalação ou
            manutenção — e recebe orçamentos de prestadores que atuam na sua região. Compare
            propostas, veja avaliações e escolha com mais segurança.
          </p>
          <p>
            O pagamento fica protegido até a conclusão do serviço. Para contratar{' '}
            {especialidade.nome.toLowerCase()}, entre no app, publique seu pedido e informe detalhes
            como local, urgência e fotos do problema para receber propostas mais precisas.
          </p>
        </div>

        {relacionadas.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-cp-text-primary">Serviços relacionados</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {relacionadas.map((esp) => (
                <li key={esp.slug}>
                  <Link
                    href={`/servicos/${categoria.slug}/${esp.slug}`}
                    className="text-sm text-cp-accent hover:underline"
                  >
                    {esp.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
