'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Gift } from 'lucide-react';
import { useState } from 'react';
import { pageContainerClass } from '@/components/layout/PageShell';
import { providerPromo } from '@/config/promotions';
import { cn } from '@/lib/cn';

/**
 * Faixa global da promoção de prestadores.
 * Desktop: arte panorâmica completa (object-contain, sem crop).
 * Mobile: arte compacta + barra de ação.
 * Home usa home-container; páginas internas usam pageContainerClass.
 */
export function ProviderPromoBanner({ className }: { className?: string }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
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

  return (
    <section
      className={cn('border-b border-cp-border/50 bg-cp-surface', className)}
    >
      <div
        className={cn(
          isHome ? 'home-container' : pageContainerClass,
          'py-1.5 sm:py-2',
        )}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group block',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/35 focus-visible:ring-offset-2',
          )}
          aria-label={`${title}. ${cta}`}
        >
          {/* Desktop: arte panorâmica inteira */}
          <div className="relative hidden md:block">
            {!imageFailed ? (
              <Image
                src={imageDesktopSrc}
                alt={imageAlt}
                width={746}
                height={101}
                unoptimized
                priority
                className={cn(
                  'h-auto w-full object-contain object-center',
                  'shadow-[0_1px_0_rgba(15,23,42,0.04)] ring-1 ring-cp-border/60',
                  'transition-[box-shadow,ring-color] duration-200',
                  'group-hover:shadow-[0_4px_18px_rgba(24,95,165,0.08)] group-hover:ring-brand-blue-border',
                )}
                sizes={
                  isHome
                    ? '(min-width: 1280px) 1280px, 100vw'
                    : '(min-width: 1024px) 1100px, 100vw'
                }
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="flex items-center justify-between gap-4 rounded-xl border border-cp-border/80 bg-white px-5 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue">
                    <Gift className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-cp-text-primary">{title}</p>
                    <p className="truncate text-xs text-cp-text-secondary">{subtitle}</p>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-blue px-3.5 py-2 text-xs font-semibold text-white lg:text-sm">
                  {cta}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                </span>
              </div>
            )}
          </div>

          {/* Mobile: arte + CTA */}
          <div className="overflow-hidden rounded-xl border border-cp-border/70 bg-white md:hidden">
            {!imageFailed ? (
              <div className="relative bg-white">
                <Image
                  src={imageMobileSrc}
                  alt={imageAlt}
                  width={388}
                  height={122}
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

            <div className="flex items-center justify-between gap-2 border-t border-cp-border/60 px-3 py-2.5">
              <span className="inline-flex rounded-full bg-brand-blue-light px-1.5 py-0.5 text-[0.5625rem] font-semibold uppercase tracking-[0.08em] text-brand-blue">
                {label}
              </span>
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
