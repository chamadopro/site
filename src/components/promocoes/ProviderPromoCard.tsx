'use client';

import Image from 'next/image';
import { ArrowRight, Gift } from 'lucide-react';
import { useState } from 'react';
import { providerPromo } from '@/config/promotions';
import { cn } from '@/lib/cn';

/**
 * Faixa global da promoção de prestadores (todas as páginas).
 * Desktop: fina e discreta — só a arte (já tem CTA). Mobile: arte + barra de ação.
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
    <section
      className={cn(
        'border-b border-gray-100 bg-cp-surface-muted/60',
        className,
      )}
    >
      <div className="home-container py-1 sm:py-1.5 md:py-1">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group block overflow-hidden rounded-lg bg-white',
            'ring-1 ring-gray-200/90 transition-all',
            'hover:ring-brand-blue/25 hover:shadow-[0_2px_12px_rgba(24,95,165,0.08)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:ring-offset-2',
            /* Desktop: faixa fina, sem “caixa” pesada */
            'md:rounded-md md:bg-gradient-to-r md:from-slate-50/80 md:via-white md:to-slate-50/80',
            'md:ring-gray-100/80 md:hover:shadow-none',
          )}
          aria-label={`${title}. ${cta}`}
        >
          <div className="relative w-full overflow-hidden bg-white md:flex md:items-center md:justify-center md:bg-transparent md:px-2 md:py-1.5">
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
                  className="hidden h-auto max-h-[88px] w-auto max-w-full object-contain object-center md:block lg:max-h-[96px]"
                  sizes="(min-width: 768px) 560px"
                  onError={() => setImageFailed(true)}
                />
              </>
            ) : (
              <div className="flex min-h-[64px] items-center justify-center gap-2 bg-brand-blue px-4 py-3 md:min-h-0 md:py-2">
                <Gift className="h-5 w-5 shrink-0 text-white/90" aria-hidden />
                <p className="text-xs font-semibold text-white sm:text-sm">{title}</p>
              </div>
            )}
          </div>

          {/* Mobile: barra de ação — desktop a arte já é suficiente */}
          <div className="flex items-center justify-between gap-2 border-t border-gray-100 px-3 py-2 md:hidden">
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
        </a>
      </div>
    </section>
  );
}
