import { ButtonLink } from '@/components/ui/Button';
import type { Audience } from '@/lib/audienceColors';
import { cn } from '@/lib/cn';

/** Container padrão das páginas internas (PC + mobile). */
export const pageContainerClass =
  'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:max-w-[1100px] lg:px-10';

/** Padding vertical padrão do bloco de conteúdo. */
export const pageSectionClass = 'bg-cp-background py-6 sm:py-8 lg:py-10';

interface PageHeroProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section className={cn('border-b border-cp-border bg-cp-surface', className)}>
      <div
        className={cn(
          pageContainerClass,
          description ? 'py-4 sm:py-5 lg:py-6' : 'py-3.5 sm:py-4 lg:py-5',
        )}
      >
        <h1 className="text-2xl font-bold tracking-[-0.02em] text-cp-text-primary sm:text-3xl lg:text-[2rem]">
          {title}
        </h1>
        {description ? (
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cp-text-secondary sm:mt-2.5 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

interface ContentSectionProps {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}

export function ContentSection({ children, narrow, className }: ContentSectionProps) {
  return (
    <section className={cn(pageSectionClass, className)}>
      <div
        className={cn(
          'mx-auto w-full px-4 sm:px-6 lg:px-10',
          narrow ? 'max-w-3xl' : 'max-w-6xl lg:max-w-[1100px]'
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface CtaBlockProps {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  external?: boolean;
  /** Laranja = cliente. Azul = prestador. */
  audience?: Audience;
}

export function CtaBlock({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  external,
  audience = 'client',
}: CtaBlockProps) {
  const primaryVariant = audience === 'provider' ? 'brand' : 'primary';

  return (
    <div className="rounded-2xl border border-cp-border bg-white p-5 sm:p-6 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-8">
      <div className="max-w-xl">
        <h2 className="page-h2 text-cp-text-primary">
          {title}
        </h2>
        <p className="page-body mt-2">
          {description}
        </p>
      </div>
      <div className="mt-5 flex w-full flex-col gap-3 sm:mt-6 sm:w-auto sm:flex-row lg:mt-0 lg:shrink-0">
        <ButtonLink href={primaryHref} variant={primaryVariant} external={external}>
          {primaryLabel}
        </ButtonLink>
        {secondaryHref && secondaryLabel && (
          <ButtonLink href={secondaryHref} variant="outline" external={external}>
            {secondaryLabel}
          </ButtonLink>
        )}
      </div>
    </div>
  );
}
