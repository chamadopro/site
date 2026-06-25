import Link from 'next/link';
import { ArrowRight, Bot, ShieldCheck, Star } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { appLinks } from '@/config/appLinks';
import type { CatalogCategoria } from '@/lib/catalog';
import { getCategoryIcon } from '@/lib/icons';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cp-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-cp-accent-soft via-cp-surface to-cp-background" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-cp-border bg-cp-surface px-3 py-1 text-xs font-medium text-cp-text-secondary">
            Marketplace de serviços com pagamento seguro
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-cp-text-primary sm:text-4xl lg:text-5xl">
            Encontre profissionais confiáveis perto de você
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cp-text-secondary sm:text-lg">
            Conheça os serviços disponíveis aqui no site. Para solicitar orçamentos, entre no
            aplicativo ChamadoPro, publique seu pedido e receba propostas de prestadores da sua
            região.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLinks.login} size="lg" external>
              Entrar no app
            </ButtonLink>
            <ButtonLink href={appLinks.cadastrarCliente} variant="outline" size="lg" external>
              Criar conta
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-cp-text-secondary">
            É prestador?{' '}
            <a href={appLinks.cadastroPrestador} className="font-medium text-cp-accent hover:underline">
              Cadastre-se como prestador
            </a>
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FeatureCard
            icon={ShieldCheck}
            title="Pagamento protegido"
            description="O valor fica em custódia até a conclusão do serviço, com mais segurança para todos."
          />
          <FeatureCard
            icon={Star}
            title="Avaliações reais"
            description="Compare prestadores por reputação, histórico e proximidade com você."
          />
          <FeatureCard
            icon={Bot}
            title="Chama.AI"
            description="Descreva o problema com texto ou áudio e receba ajuda para encontrar o serviço certo."
          />
          <div className="rounded-cp-card border border-cp-border bg-cp-surface p-5 shadow-cp">
            <p className="text-sm font-semibold text-cp-text-primary">Como funciona</p>
            <ol className="mt-3 space-y-2 text-sm text-cp-text-secondary">
              <li>1. Entre no app e publique o que precisa</li>
              <li>2. Prestadores enviam orçamentos</li>
              <li>3. Você escolhe, paga e avalia</li>
            </ol>
            <Link
              href="/como-funciona"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-cp-accent hover:underline"
            >
              Saiba mais <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-cp-card border border-cp-border bg-cp-surface p-5 shadow-cp">
      <div className="mb-3 inline-flex rounded-lg bg-cp-accent-soft p-2 text-cp-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-cp-text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cp-text-secondary">{description}</p>
    </div>
  );
}

export function CategoryGrid({ categorias }: { categorias: CatalogCategoria[] }) {
  return (
    <section className="bg-cp-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-cp-text-primary sm:text-3xl">
              Serviços mais pedidos
            </h2>
            <p className="mt-2 max-w-2xl text-cp-text-secondary">
              Navegue por categoria e encontre o profissional ideal para o seu problema.
            </p>
          </div>
          <ButtonLink href="/servicos" variant="outline">
            Ver todas as categorias
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categorias.map((cat) => {
            const Icon = getCategoryIcon(cat.icone);
            return (
              <Link
                key={cat.slug}
                href={`/servicos/${cat.slug}`}
                className="group rounded-cp-card border border-cp-border bg-cp-surface p-5 shadow-cp transition hover:border-cp-accent/40 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-cp-accent-soft p-3 text-cp-accent transition group-hover:bg-cp-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cp-text-primary">{cat.nome}</h3>
                    <p className="mt-1 text-sm text-cp-text-secondary line-clamp-2">
                      {cat.descricao}
                    </p>
                    <p className="mt-2 text-xs font-medium text-cp-accent">
                      {cat.especialidades.length} especialidades
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="bg-cp-surface py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-cp-text-primary sm:text-3xl">
          Pronto para resolver o que precisa?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-cp-text-secondary">
          Acesse o aplicativo ChamadoPro para publicar seu pedido e receber propostas de
          prestadores qualificados na sua região.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={appLinks.entrarParaPedirServico()} size="lg" external>
            Entrar e solicitar no app
          </ButtonLink>
          <ButtonLink href={appLinks.cadastrarCliente} variant="outline" size="lg" external>
            Criar conta gratuita
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
