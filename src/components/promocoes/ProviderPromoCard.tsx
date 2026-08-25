'use client';

import Image from 'next/image';
import { ArrowRight, Gift } from 'lucide-react';
import { useState } from 'react';
import { providerPromo } from '@/config/promotions';
import { cn } from '@/lib/cn';

interface ProviderPromoCardProps {
  className?: string;
  /** Layout mais largo na home (imagem + texto lado a lado no desktop). */
  featured?: boolean;
}

export function ProviderPromoCard({ className, featured = false }: ProviderPromoCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const { label, title, subtitle, cta, href, imageSrc, imageAlt } = providerPromo;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group block overflow-hidden rounded-2xl border border-brand-blue-border/50 bg-white',
        'shadow-[0_8px_28px_rgba(13,24,36,0.06)] transition-all',
        'hover:border-brand-blue/35 hover:shadow-[0_14px_36px_rgba(24,95,165,0.12)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:ring-offset-2',
        featured
          ? 'lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch'
          : '',
        className,
      )}
      aria-label={`${title}. ${cta}`}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-brand-blue-light',
          featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[220px]' : 'aspect-[16/9]',
        )}
      >
        {!imageFailed ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes={
              featured
                ? '(min-width: 1024px) 520px, 100vw'
                : '(min-width: 1024px) 640px, 100vw'
            }
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[linear-gradient(145deg,#185fa5_0%,#134a82_55%,#0d1824_100%)] px-6 text-center">
            <Gift className="h-8 w-8 text-white/90" aria-hidden />
            <p className="text-sm font-semibold text-white">{title}</p>
          </div>
        )}
      </div>

      <div
        className={cn(
          'flex flex-col justify-center p-5 sm:p-6',
          featured ? 'lg:p-8' : '',
        )}
      >
        <span className="inline-flex w-fit items-center rounded-full bg-brand-blue-light px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand-blue">
          {label}
        </span>
        <h3
          className={cn(
            'mt-3 font-bold tracking-[-0.02em] text-cp-text-primary',
            featured ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl',
          )}
        >
          {title}
        </h3>
        <p className="page-body mt-2 max-w-md">{subtitle}</p>
        <span
          className={cn(
            'mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white',
            'transition-colors group-hover:bg-[#134a82]',
          )}
        >
          {cta}
          <ArrowRight size={16} strokeWidth={2.5} aria-hidden />
        </span>
      </div>
    </a>
  );
}
