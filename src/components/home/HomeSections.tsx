import Link from 'next/link';
import {
  ArrowDown,
  CheckCircle2,
  MessageSquare,
  Mic,
  Search,
  ShieldCheck,
  User,
} from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { appLinks } from '@/config/appLinks';
import type { CatalogCategoria } from '@/lib/catalog';
import { homeSections } from '@/lib/marketingContent';
import { audienceClasses } from '@/lib/audienceColors';
import { getCategoryIcon } from '@/lib/icons';
import { cn } from '@/lib/cn';

const sectionPadding = 'py-12 sm:py-14';
const client = audienceClasses.client;
const provider = audienceClasses.provider;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cp-surface">
      <div className="absolute inset-0 bg-gradient-to-b from-cp-accent-soft/60 via-cp-surface to-cp-background" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-cp-text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            Fale do seu jeito.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-cp-text-primary sm:text-xl">
            O <span className="font-semibold text-cp-accent">ChamadoPro</span> entende o problema
            e encontra quem pode resolver.
          </p>
          <p className="mt-3 text-base leading-relaxed text-cp-text-secondary">
            Escreva, envie áudio ou explique como faria para um amigo. Sem formulário complicado,
            sem adivinhar qual profissional procurar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={appLinks.entrarParaPedirServico()} size="lg" external>
              Falar do meu problema
            </ButtonLink>
            <ButtonLink href="#como-funciona" variant="outline" size="lg">
              Ver como funciona
            </ButtonLink>
          </div>

          <p className="mt-5 text-sm text-cp-text-secondary">
            É prestador?{' '}
            <a
              href={appLinks.cadastroPrestador}
              className={cn('font-medium hover:underline', provider.text)}
            >
              Divulgue seu trabalho gratuitamente
            </a>
          </p>
        </div>

        <HeroConversationDemo />
      </div>
    </section>
  );
}

function HeroConversationDemo() {
  return (
    <div
      className="rounded-cp-card border border-cp-border bg-cp-surface p-5 shadow-cp sm:p-6 lg:p-7"
      aria-label="Exemplo de como o ChamadoPro entende o seu problema"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-cp-text-secondary">
        Veja como é simples
      </p>

      <div className="mt-5 space-y-4">
        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cp-surface-muted text-cp-text-secondary">
            <User className="h-4 w-4" />
          </div>
          <div className="rounded-2xl rounded-tl-md border border-cp-border bg-cp-background px-4 py-3 text-sm leading-relaxed text-cp-text-primary">
            &ldquo;Minha torneira está vazando embaixo da pia.&rdquo;
          </div>
        </div>

        <FlowArrow />

        <div className="flex gap-3">
          <div
            className={cn(
              'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white',
              'bg-cp-accent'
            )}
          >
            CP
          </div>
          <div className="rounded-2xl rounded-tl-md border border-cp-accent/20 bg-cp-accent-soft px-4 py-3 text-sm leading-relaxed text-cp-text-primary">
            Entendemos seu problema.
          </div>
        </div>

        <FlowArrow />

        <div
          className={cn(
            'flex items-start gap-3 rounded-xl border border-cp-border bg-cp-background px-4 py-3.5',
            client.borderHover
          )}
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cp-accent" />
          <p className="text-sm font-medium text-cp-text-primary">
            Encanadores encontrados próximos de você.
          </p>
        </div>
      </div>

      <p className="mt-5 border-t border-cp-border pt-4 text-center text-xs text-cp-text-secondary">
        Você fala · O ChamadoPro entende · O profissional certo aparece
      </p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center py-0.5 text-cp-text-disabled" aria-hidden>
      <ArrowDown className="h-4 w-4" />
    </div>
  );
}

const steps = [
  {
    icon: Mic,
    title: 'Fale do seu jeito',
    description: 'Conte o problema por texto ou áudio, como numa conversa.',
  },
  {
    icon: Search,
    title: 'O ChamadoPro entende',
    description: 'Identificamos automaticamente o profissional mais adequado.',
  },
  {
    icon: MessageSquare,
    title: 'Receba propostas',
    description: 'Profissionais da sua região enviam orçamentos para você.',
  },
  {
    icon: ShieldCheck,
    title: 'Escolha com segurança',
    description: 'Compare perfis, avaliações e contrate com pagamento protegido.',
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className={cn('scroll-mt-20 border-y border-cp-border bg-cp-surface', sectionPadding)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-cp-text-primary sm:text-3xl">Como funciona</h2>
          <p className="mt-2 text-cp-text-secondary">
            Você não precisa saber o nome da profissão. Só contar o que aconteceu.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-cp-card border border-cp-border bg-cp-background p-5"
            >
              <p className="text-xs font-semibold text-cp-accent">Passo {i + 1}</p>
              <div className={cn('mt-3 inline-flex rounded-lg p-2', client.icon)}>
                <step.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-cp-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cp-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <ButtonLink href={appLinks.entrarParaPedirServico()} external>
            Começar agora
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function CategoryGrid({ categorias }: { categorias: CatalogCategoria[] }) {
  const catalog = homeSections.catalog;

  return (
    <section className={cn('bg-cp-background', sectionPadding)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-cp-text-primary sm:text-3xl">
              {catalog.title}
            </h2>
            <p className="mt-1.5 max-w-2xl text-cp-text-secondary">{catalog.subtitle}</p>
          </div>
          <ButtonLink href="/servicos" variant="outline" size="sm">
            {catalog.link}
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {categorias.map((cat) => {
            const Icon = getCategoryIcon(cat.icone);
            return (
              <Link
                key={cat.slug}
                href={`/servicos/${cat.slug}`}
                className={cn(
                  'group rounded-cp-card border border-cp-border bg-cp-surface p-4 shadow-cp transition hover:shadow-md sm:p-5',
                  client.borderHover
                )}
              >
                <div className="flex items-start gap-3.5">
                  <div className={cn('rounded-xl p-2.5 transition', client.iconInteractive)}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-cp-text-primary">{cat.nome}</h3>
                    <p className="mt-1 text-sm text-cp-text-secondary line-clamp-2">
                      {cat.descricao}
                    </p>
                    <p className={cn('mt-1.5 text-xs font-medium', client.text)}>
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

export function ProviderSection() {
  return (
    <section className={cn('border-t border-cp-border', provider.sectionBg, sectionPadding)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className={cn('inline-flex rounded-full px-3 py-1 text-xs font-medium', provider.badge)}>
              Para prestadores
            </p>
            <h2 className="mt-3 text-xl font-bold text-cp-text-primary sm:text-2xl">
              Divulgue sua empresa e conquiste clientes sem pagar por visibilidade
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-cp-text-secondary sm:text-base">
              Faça publicações gratuitas e fique visível em toda a plataforma ChamadoPro. Mostre
              seu trabalho, receba pedidos na sua região e construa reputação — sem pagar pela
              divulgação.
            </p>
          </div>
          <ButtonLink href={appLinks.cadastroPrestador} variant="brand" size="lg" external>
            Cadastrar gratuitamente
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className={cn('border-t border-cp-border', client.sectionBg, sectionPadding)}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-cp-text-primary sm:text-3xl">
          Você fala. O ChamadoPro entende.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-base text-cp-text-secondary">
          O profissional certo aparece. Conte o que aconteceu no app e receba orçamentos da sua
          região.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={appLinks.entrarParaPedirServico()} size="lg" external>
            Resolver meu problema
          </ButtonLink>
          <ButtonLink href={appLinks.cadastrarCliente} variant="outline" size="lg" external>
            Criar conta gratuita
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
