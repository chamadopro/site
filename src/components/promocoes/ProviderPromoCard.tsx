'use client';

import Image from 'next/image';
import { ArrowRight, Gift } from 'lucide-react';
import { useState } from 'react';
import { providerPromo } from '@/config/promotions';
import { cn } from '@/lib/cn';

/**
 * Faixa global da promoção de prestadores.
 * A arte é landscape — exibimos inteira (sem crop) e o CTA abaixo.
 */
export function ProviderPromoBanner({ className }: { className?: string }) {
  const [imageFailed, setImageFailed] = useState(false);
  const { label, title, subtitle, cta, href, imageSrc, imageAlt } = providerPromo;

  return (
    <section
      className={cn(
        'border-b border-brand-blue-border/30 bg-[linear-gradient(180deg,#f0f6ff_0%,#ffffff_70%)]',
        className,
      )}
    >
      <div className="home-container py-3 sm:py-4 lg:py-5">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group block overflow-hidden rounded-2xl border border-brand-blue-border/40 bg-white',
            'shadow-[0_6px_20px_rgba(13,24,36,0.06)] transition-shadow',
            'hover:border-brand-blue/35 hover:shadow-[0_10px_28px_rgba(24,95,165,0.12)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:ring-offset-2',
          )}
          aria-label={`${title}. ${cta}`}
        >
          <div className="relative w-full overflow-hidden bg-white">
            {!imageFailed ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1600}
                height={640}
                unoptimized
                priority
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) 1200px, (min-width: 1024px) 1000px, 100vw"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="flex min-h-[120px] items-center justify-center gap-3 bg-[linear-gradient(145deg,#185fa5_0%,#134a82_100%)] px-6 py-8 text-center sm:min-h-[140px]">
                <Gift className="h-7 w-7 shrink-0 text-white/90" aria-hidden />
                <div className="text-left">
                  <p className="text-sm font-semibold text-white sm:text-base">{title}</p>
                  <p className="mt-0.5 text-xs text-white/75 sm:text-sm">{subtitle}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 border-t border-brand-blue-border/30 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-3.5">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex rounded-full bg-brand-blue-light px-2 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-brand-blue">
                  {label}
                </span>
                <p className="text-sm font-semibold tracking-[-0.01em] text-cp-text-primary sm:text-[0.9375rem]">
                  {title}
                </p>
              </div>
              <p className="mt-0.5 text-xs text-cp-text-secondary sm:text-[0.8125rem]">
                {subtitle}
              </p>
            </div>

            <span
              className={cn(
                'inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-brand-blue px-4 py-2.5',
                'text-sm font-semibold text-white transition-colors group-hover:bg-[#134a82]',
                'sm:w-auto sm:px-5',
              )}
            >
              {cta}
              <ArrowRight size={16} strokeWidth={2.5} aria-hidden />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
