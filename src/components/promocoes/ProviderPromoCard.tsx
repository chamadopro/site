'use client';

import Image from 'next/image';
import { ArrowRight, Gift } from 'lucide-react';
import { useState } from 'react';
import { providerPromo } from '@/config/promotions';
import { cn } from '@/lib/cn';

/**
 * Faixa global da promoção de prestadores (todas as páginas).
 * Desktop 5:1 e mobile empilhado — artes separadas.
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

  return (
    <section className={cn('border-b border-brand-blue-border/25 bg-white', className)}>
      <div className="home-container py-2.5 sm:py-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group block overflow-hidden rounded-xl border border-brand-blue-border/35 bg-white',
            'shadow-[0_4px_16px_rgba(13,24,36,0.05)] transition-shadow',
            'hover:border-brand-blue/30 hover:shadow-[0_8px_22px_rgba(24,95,165,0.10)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:ring-offset-2',
          )}
          aria-label={`${title}. ${cta}`}
        >
          <div className="relative w-full overflow-hidden bg-white">
            {!imageFailed ? (
              <>
                <Image
                  src={imageMobileSrc}
                  alt={imageAlt}
                  width={1552}
                  height={688}
                  unoptimized
                  priority
                  className="h-auto w-full object-contain md:hidden"
                  sizes="100vw"
                  onError={() => setImageFailed(true)}
                />
                <Image
                  src={imageDesktopSrc}
                  alt={imageAlt}
                  width={2320}
                  height={464}
                  unoptimized
                  priority
                  className="hidden h-auto w-full object-contain md:block"
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  onError={() => setImageFailed(true)}
                />
              </>
            ) : (
              <div className="flex min-h-[100px] items-center justify-center gap-3 bg-[linear-gradient(145deg,#185fa5_0%,#134a82_100%)] px-5 py-6">
                <Gift className="h-6 w-6 shrink-0 text-white/90" aria-hidden />
                <div className="min-w-0 text-left">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-xs text-white/75">{subtitle}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-brand-blue-border/25 px-3 py-2 sm:px-4 sm:py-2.5">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="inline-flex rounded-full bg-brand-blue-light px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-brand-blue">
                  {label}
                </span>
                <p className="truncate text-xs font-semibold text-cp-text-primary sm:text-sm">
                  {title}
                </p>
              </div>
              <p className="mt-0.5 hidden text-[0.75rem] text-cp-text-secondary sm:block">
                {subtitle}
              </p>
            </div>

            <span
              className={cn(
                'inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand-blue px-3 py-1.5',
                'text-xs font-semibold text-white transition-colors group-hover:bg-[#134a82]',
                'sm:gap-2 sm:px-4 sm:py-2 sm:text-sm',
              )}
            >
              {cta}
              <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
