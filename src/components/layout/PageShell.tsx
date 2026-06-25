import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

export function PageHero({ title, description, className }: PageHeroProps) {
  return (
    <section className={cn('border-b border-cp-border bg-cp-surface', className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-cp-text-primary sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-cp-text-secondary">{description}</p>
      </div>
    </section>
  );
}

interface ContentSectionProps {
  children: React.ReactNode;
  narrow?: boolean;
}

export function ContentSection({ children, narrow }: ContentSectionProps) {
  return (
    <section className="bg-cp-background py-12 sm:py-16">
      <div
        className={cn(
          'mx-auto px-4 sm:px-6 lg:px-8',
          narrow ? 'max-w-3xl' : 'max-w-4xl'
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
}

export function CtaBlock({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  external,
}: CtaBlockProps) {
  return (
    <div className="rounded-cp-card border border-cp-border bg-cp-surface p-8 shadow-cp">
      <h2 className="text-xl font-semibold text-cp-text-primary">{title}</h2>
      <p className="mt-2 text-cp-text-secondary">{description}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href={primaryHref} external={external}>
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
