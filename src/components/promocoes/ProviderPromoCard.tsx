'use client';

import Image from 'next/image';
import { ArrowRight, Gift } from 'lucide-react';
import { useState } from 'react';
import { pageContainerClass } from '@/components/layout/PageShell';
import { providerPromo } from '@/config/promotions';
import { cn } from '@/lib/cn';

/**
 * Faixa global da promoção de prestadores (todas as páginas).
 * Desktop: barra nativa alinhada ao grid das páginas + recorte da arte à direita.
 * Mobile: arte vertical + barra de ação.
 */
export function ProviderPromoBanner({ className }: { className?: string }) {
  const [imageFailed, setImageFailed] = useState(false);
  const {
    label,
    title,
    subtitle,
    cta,
    href,
    imageDesktopSrc,
    imageMobileSrc,
    imageAlt,
  } = providerPromo;

  const linkClassName = cn(
    'group block overflow-hidden rounded-xl border border-cp-border/80 bg-white',
    'transition-[border-color,box-shadow] duration-200',
    'hover:border-brand-blue-border hover:shadow-[0_4px_20px_rgba(24,95,165,0.07)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/35 focus-visible:ring-offset-2',
  );

  return (
    <section
      className={cn(
        'border-b border-cp-border/60 bg-cp-surface',
        className,
      )}
    >
      <div className={cn(pageContainerClass, 'py-2 sm:py-2.5')}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
          aria-label={`${title}. ${cta}`}
        >
          {/* ── Desktop: barra harmônica com o grid das páginas internas ── */}
          <div className="hidden md:flex md:min-h-[52px] md:items-stretch lg:min-h-[56px]">
            <div
              className="w-1 shrink-0 bg-brand-orange"
              aria-hidden
            />

            <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-2.5 lg:gap-4 lg:px-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue">
                <Gift className="h-4 w-4" strokeWidth={2.25} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="inline-flex rounded-full bg-brand-blue-light px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.06em] text-brand-blue">
                    {label}
                  </span>
                  <p className="text-sm font-bold tracking-[-0.01em] text-cp-text-primary lg:text-[0.9375rem]">
                    {title}
                  </p>
                </div>
                <p className="mt-0.5 truncate text-xs leading-snug text-cp-text-secondary lg:text-[0.8125rem]">
                  {subtitle}
                </p>
              </div>
            </div>

            {!imageFailed ? (
              <div className="relative hidden w-[148px] shrink-0 overflow-hidden border-l border-cp-border/50 md:block lg:w-[168px] xl:w-[200px]">
                <Image
                  src={imageDesktopSrc}
                  alt=""
                  fill
                  unoptimized
                  priority
                  className="object-cover object-[88%_center] transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="200px"
                  aria-hidden
                  onError={() => setImageFailed(true)}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"
                  aria-hidden
                />
              </div>
            ) : null}

            <div className="flex shrink-0 items-center border-l border-cp-border/50 px-4 lg:px-5">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-blue px-3.5 py-2 text-xs font-semibold text-white transition-colors group-hover:bg-[var(--cp-brand-blue-hover)] lg:text-sm">
                {cta}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                  aria-hidden
                />
              </span>
            </div>
          </div>

          {/* ── Mobile: arte + barra de ação ── */}
          <div className="md:hidden">
            {!imageFailed ? (
              <div className="relative bg-brand-blue-light/30">
                <Image
                  src={imageMobileSrc}
                  alt={imageAlt}
                  width={1552}
                  height={688}
                  unoptimized
                  priority
                  className="h-auto w-full object-contain"
                  sizes="100vw"
                  onError={() => setImageFailed(true)}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 bg-brand-blue px-4 py-4">
                <Gift className="h-5 w-5 shrink-0 text-white/90" aria-hidden />
                <p className="text-sm font-semibold text-white">{title}</p>
              </div>
            )}

            <div className="flex items-center justify-between gap-2 border-t border-cp-border/60 bg-white px-3 py-2.5">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex rounded-full bg-brand-blue-light px-1.5 py-0.5 text-[0.5625rem] font-semibold uppercase tracking-[0.08em] text-brand-blue">
                    {label}
                  </span>
                  <p className="truncate text-xs font-semibold text-cp-text-primary">
                    {title}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand-blue px-2.5 py-1.5 text-[0.6875rem] font-semibold text-white">
                {cta}
                <ArrowRight size={12} strokeWidth={2.5} aria-hidden />
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
