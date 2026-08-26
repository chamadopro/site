'use client';

import Image from 'next/image';
import { ArrowRight, Gift } from 'lucide-react';
import { useState } from 'react';
import { providerPromo } from '@/config/promotions';
import { cn } from '@/lib/cn';

/** Dimensões reais das artes (não forçar largura da página). */
const DESKTOP = { w: 746, h: 101 } as const;
const MOBILE = { w: 388, h: 122 } as const;

/**
 * Faixa da promoção — imagem na proporção/altura original + CTA na mesma linha.
 * Toda a faixa é clicável; o botão reforça a ação.
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
        'border-b border-cp-border/50 bg-cp-surface',
        className,
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group block py-2',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/35 focus-visible:ring-offset-2',
        )}
        aria-label={`${title}. ${cta}`}
      >
        {/* Desktop: imagem (tamanho original) + botão na mesma linha */}
        <div className="hidden items-center justify-center gap-4 px-4 md:flex lg:gap-5">
          {!imageFailed ? (
            <Image
              src={imageDesktopSrc}
              alt={imageAlt}
              width={DESKTOP.w}
              height={DESKTOP.h}
              unoptimized
              priority
              className="h-[101px] w-auto max-w-none shrink-0 object-contain transition-opacity group-hover:opacity-95"
              style={{ height: DESKTOP.h, width: 'auto' }}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="flex min-w-0 max-w-xl items-center gap-3 rounded-xl border border-cp-border/80 bg-white px-5 py-3">
              <Gift className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
              <div className="min-w-0">
                <p className="text-sm font-bold text-cp-text-primary">{title}</p>
                <p className="truncate text-xs text-cp-text-secondary">{subtitle}</p>
              </div>
            </div>
          )}

          <span
            className={cn(
              'inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-brand-blue px-5 text-sm font-semibold text-white',
              'shadow-sm transition-[background-color,transform] duration-200',
              'group-hover:bg-[var(--cp-brand-blue-hover)] group-hover:translate-x-0.5',
            )}
          >
            {cta}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} aria-hidden />
          </span>
        </div>

        {/* Mobile: imagem + CTA abaixo */}
        <div className="md:hidden">
          {!imageFailed ? (
            <div className="flex justify-center px-2">
              <Image
                src={imageMobileSrc}
                alt={imageAlt}
                width={MOBILE.w}
                height={MOBILE.h}
                unoptimized
                priority
                className="h-[122px] w-auto max-w-full object-contain"
                style={{ height: MOBILE.h, width: 'auto', maxWidth: '100%' }}
                onError={() => setImageFailed(true)}
              />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 bg-brand-blue px-4 py-4">
              <Gift className="h-5 w-5 shrink-0 text-white/90" aria-hidden />
              <p className="text-sm font-semibold text-white">{title}</p>
            </div>
          )}

          <div className="mx-4 mt-2 flex items-center justify-between gap-2 rounded-lg border border-cp-border/60 bg-white px-3 py-2.5">
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
    </section>
  );
}
