'use client';

import Image from 'next/image';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  buildPhoneFlowPlaylist,
  phoneFlowConfig,
  phoneFlowSrc,
  type PhoneFlowChapter,
} from '@/lib/phoneFlowScreens';
import { cn } from '@/lib/cn';

interface PhoneMockupProps {
  className?: string;
  compact?: boolean;
  /** Moldura de aparelho ao redor das telas (desktop). */
  deviceFrame?: boolean;
}

export function PhoneMockup({
  className,
  compact = false,
  deviceFrame = false,
}: PhoneMockupProps) {
  const { frames, intervalMs, tipIntervalMs, slideMs, aspectRatio } = phoneFlowConfig;
  const [slidePos, setSlidePos] = useState(0);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const preloadStarted = useRef(false);

  const slides = useMemo(() => buildPhoneFlowPlaylist(), []);
  const stepCount = slides.length;
  const displayPos = stepCount > 0 ? slidePos % stepCount : 0;
  const activeSlide = slides[displayPos];

  const markLoaded = useCallback(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (preloadStarted.current) return;
    preloadStarted.current = true;

    frames.forEach((frame) => {
      const img = new window.Image();
      img.onload = markLoaded;
      img.onerror = markLoaded;
      img.src = phoneFlowSrc(frame.file);
    });
  }, [frames, markLoaded]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!ready || stepCount <= 1) return;

    const dwell = activeSlide?.kind === 'tip' ? tipIntervalMs : intervalMs;

    const id = window.setTimeout(() => {
      if (reducedMotion) {
        setSlidePos((p) => (p + 1) % stepCount);
        return;
      }
      setTransitionEnabled(true);
      setSlidePos((p) => p + 1);
    }, dwell);

    return () => window.clearTimeout(id);
  }, [
    ready,
    stepCount,
    intervalMs,
    tipIntervalMs,
    reducedMotion,
    activeSlide?.kind,
    displayPos,
  ]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || stepCount <= 1) return;

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== track || e.propertyName !== 'transform') return;
      setSlidePos((p) => {
        if (p >= stepCount) {
          setTransitionEnabled(false);
          return 0;
        }
        return p;
      });
    };

    track.addEventListener('transitionend', onTransitionEnd);
    return () => track.removeEventListener('transitionend', onTransitionEnd);
  }, [stepCount]);

  useLayoutEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => setTransitionEnabled(true));
    }
  }, [transitionEnabled]);

  const trackSlides =
    ready && stepCount > 1 && !reducedMotion ? [...slides, slides[0]] : slides;

  const visualPos = reducedMotion ? displayPos : slidePos;
  const useSlideMotion = ready && transitionEnabled && !reducedMotion;

  const screens = (
    <div className="relative w-full overflow-hidden bg-white" style={{ aspectRatio }}>
      {!ready && <PhonePlaceholder />}

      {ready && (
        <div
          ref={trackRef}
          className={cn('flex h-full', useSlideMotion && 'transition-transform ease-out')}
          style={{
            transform: `translateX(-${visualPos * 100}%)`,
            transitionDuration: useSlideMotion ? `${slideMs}ms` : '0ms',
          }}
        >
          {trackSlides.map((slide, slideIndex) => {
            const isActiveVisual =
              slideIndex === visualPos || (visualPos >= stepCount && slideIndex === 0);

            return (
              <div
                key={`${slide.id}-${slideIndex}`}
                className="relative h-full min-w-full shrink-0"
              >
                {slide.kind === 'tip' ? (
                  <FlowTipSlide
                    chapter={slide.chapter}
                    compact={compact}
                    animate={isActiveVisual && !reducedMotion}
                  />
                ) : (
                  <Image
                    src={phoneFlowSrc(slide.frame.file)}
                    alt={slide.frame.alt}
                    fill
                    unoptimized
                    className="object-contain object-center"
                    sizes="(min-width: 1280px) 310px, (min-width: 1024px) 280px, 300px"
                    priority={slide.frameIndex === 0 && slideIndex === 0}
                    loading={slide.frameIndex === 0 ? 'eager' : 'lazy'}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className={cn('mx-auto', className ?? 'w-[200px]')}>
      {deviceFrame ? (
        <div className="rounded-[2.4rem] bg-[#0d1824] p-[11px] shadow-[0_28px_64px_rgba(13,24,36,0.28)]">
          <div className="overflow-hidden rounded-[1.85rem] bg-white">{screens}</div>
        </div>
      ) : (
        screens
      )}
    </div>
  );
}

function FlowTipSlide({
  chapter,
  compact,
  animate,
}: {
  chapter: PhoneFlowChapter;
  compact: boolean;
  animate: boolean;
}) {
  const isBlue = chapter.accent === 'blue';

  return (
    <div
      className={cn(
        'absolute inset-0 flex flex-col items-center justify-center overflow-hidden px-5 text-center',
        isBlue
          ? 'bg-[linear-gradient(165deg,#f0f6ff_0%,#ffffff_55%,#fff0eb_100%)]'
          : 'bg-[linear-gradient(165deg,#fff0eb_0%,#ffffff_55%,#f0f6ff_100%)]',
      )}
      aria-live={animate ? 'polite' : 'off'}
    >
      {/* Orbes de fundo */}
      <div
        className={cn(
          'pointer-events-none absolute -left-6 top-16 h-24 w-24 rounded-full blur-2xl',
          isBlue ? 'bg-brand-blue/20' : 'bg-brand-orange/25',
          animate && 'animate-flow-orb',
        )}
        aria-hidden
      />
      <div
        className={cn(
          'pointer-events-none absolute -right-4 bottom-20 h-28 w-28 rounded-full blur-2xl',
          isBlue ? 'bg-brand-orange/20' : 'bg-brand-blue/20',
          animate && 'animate-flow-orb-delay',
        )}
        aria-hidden
      />

      {/* Sparkles */}
      <span
        className={cn(
          'pointer-events-none absolute left-7 top-14 text-lg',
          isBlue ? 'text-brand-blue/70' : 'text-brand-orange/80',
          animate && 'animate-flow-sparkle',
        )}
        aria-hidden
      >
        ✦
      </span>
      <span
        className={cn(
          'pointer-events-none absolute right-8 top-24 text-sm',
          isBlue ? 'text-brand-orange/70' : 'text-brand-blue/70',
          animate && 'animate-flow-sparkle-delay',
        )}
        aria-hidden
      >
        ✦
      </span>
      <span
        className={cn(
          'pointer-events-none absolute bottom-24 left-10 text-xs',
          isBlue ? 'text-brand-blue/50' : 'text-brand-orange/55',
          animate && 'animate-flow-sparkle-delay',
        )}
        aria-hidden
      >
        ✦
      </span>

      <div
        key={animate ? `${chapter.id}-in` : chapter.id}
        className={cn(
          'relative z-10 flex w-full max-w-[15rem] flex-col items-center',
          animate && 'animate-flow-bubble',
        )}
      >
        <span
          className={cn(
            'mb-3 inline-flex items-center rounded-full px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em]',
            isBlue
              ? 'bg-brand-blue/10 text-brand-blue'
              : 'bg-brand-orange/10 text-brand-orange',
            animate && 'animate-flow-badge',
          )}
        >
          {chapter.step} · {chapter.name}
        </span>

        <div
          className={cn(
            'relative w-full overflow-hidden rounded-[1.35rem] border bg-white px-4 py-4 shadow-[0_14px_36px_rgba(13,24,36,0.10)]',
            isBlue ? 'border-brand-blue/20' : 'border-brand-orange/25',
            animate && 'animate-flow-float',
          )}
        >
          {animate && (
            <div
              className="pointer-events-none absolute inset-0 flow-tip-shimmer"
              aria-hidden
            />
          )}

          <div
            className={cn(
              'relative mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full shadow-sm',
              isBlue
                ? 'bg-brand-blue-light text-brand-blue'
                : 'bg-brand-orange-light text-brand-orange',
              animate && 'animate-flow-icon',
            )}
            aria-hidden
          >
            <TipIcon chapterId={chapter.id} />
          </div>

          <p
            className={cn(
              'relative font-semibold leading-snug tracking-[-0.02em] text-cp-text-primary',
              compact ? 'text-[0.9375rem]' : 'text-base',
              animate && 'animate-flow-title',
            )}
          >
            {chapter.title}
          </p>
          <p
            className={cn(
              'relative mt-2 leading-relaxed text-cp-text-secondary',
              compact ? 'text-[0.75rem]' : 'text-[0.8125rem]',
              animate && 'animate-flow-body',
            )}
          >
            {chapter.body}
          </p>
        </div>

        <div className="mt-3.5 flex items-center gap-1.5" aria-hidden>
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              isBlue ? 'bg-brand-blue/35' : 'bg-brand-orange/35',
            )}
          />
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              isBlue ? 'bg-brand-blue/70' : 'bg-brand-orange/70',
              animate && 'animate-flow-chip',
            )}
          />
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              isBlue ? 'bg-brand-blue/35' : 'bg-brand-orange/35',
            )}
          />
        </div>
      </div>
    </div>
  );
}

function TipIcon({ chapterId }: { chapterId: PhoneFlowChapter['id'] }) {
  if (chapterId === 'do-seu-jeito') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 3v10" strokeLinecap="round" />
        <path d="M8 9a4 4 0 0 0 8 0" strokeLinecap="round" />
        <path d="M5 14a7 7 0 0 0 14 0" strokeLinecap="round" />
        <path d="M12 17v3" strokeLinecap="round" />
      </svg>
    );
  }
  if (chapterId === 'revisao') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 11l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12a8 8 0 1 1-8-8" strokeLinecap="round" />
      </svg>
    );
  }
  if (chapterId === 'no-ar') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M12 3l1.8 5.5H19l-4.4 3.2 1.7 5.3L12 14.8 7.7 17l1.7-5.3L5 8.5h5.2L12 3z"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 8h3l1.5-2h7L17 8h3v11H4V8z" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

function PhonePlaceholder() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-xl bg-gradient-to-b from-brand-orange-light to-white p-3 text-center">
      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <span className="text-base text-brand-orange">+</span>
      </div>
      <p className="home-meta">Carregando fluxo…</p>
    </div>
  );
}
