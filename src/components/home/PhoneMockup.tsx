'use client';

import Image from 'next/image';
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { phoneFlowConfig, phoneFlowSrc } from '@/lib/phoneFlowScreens';
import { cn } from '@/lib/cn';

interface PhoneMockupProps {
  className?: string;
  compact?: boolean;
  hideCaption?: boolean;
}

export function PhoneMockup({
  className,
  compact = false,
  hideCaption = false,
}: PhoneMockupProps) {
  const { frames, intervalMs, slideMs, aspectRatio, defaultCaption } = phoneFlowConfig;
  const [slidePos, setSlidePos] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(() => new Set());
  const [reducedMotion, setReducedMotion] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const preloadStarted = useRef(false);

  const availableFrames = useMemo(() => {
    if (loadedIndices.size === 0) return [];
    return frames
      .map((frame, index) => ({ frame, index }))
      .filter(({ index }) => loadedIndices.has(index));
  }, [frames, loadedIndices]);

  const stepCount = availableFrames.length;
  const displayPos = stepCount > 0 ? slidePos % stepCount : 0;
  const activeFrame = availableFrames[displayPos]?.frame ?? frames[0];

  const markLoaded = useCallback((index: number) => {
    setLoadedIndices((prev) => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  const markFailed = useCallback((_index: number) => {
    /* frame ausente */
  }, []);

  useEffect(() => {
    if (preloadStarted.current) return;
    preloadStarted.current = true;

    frames.forEach((frame, index) => {
      const img = new window.Image();
      img.onload = () => markLoaded(index);
      img.onerror = () => markFailed(index);
      img.src = phoneFlowSrc(frame.file);
    });
  }, [frames, markLoaded, markFailed]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (stepCount <= 1) return;

    const id = window.setInterval(() => {
      if (reducedMotion) {
        setSlidePos((p) => (p + 1) % stepCount);
        return;
      }
      setTransitionEnabled(true);
      setSlidePos((p) => p + 1);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [stepCount, intervalMs, reducedMotion]);

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

  const hasAnyFrame = stepCount > 0;
  const captionLine1 = hasAnyFrame ? activeFrame.caption : defaultCaption.line1;
  const activeStep = stepCount > 0 ? displayPos + 1 : 0;

  const trackSlides =
    stepCount > 1 && !reducedMotion
      ? [...availableFrames, availableFrames[0]]
      : availableFrames;

  const visualPos = reducedMotion ? displayPos : slidePos;
  const useSlideMotion = transitionEnabled && !reducedMotion;

  return (
    <div className={cn('mx-auto', className ?? 'w-[200px]')}>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio }}>
        {!hasAnyFrame && <PhonePlaceholder />}

        {hasAnyFrame && (
          <div
            ref={trackRef}
            className={cn('flex h-full', useSlideMotion && 'transition-transform ease-out')}
            style={{
              transform: `translateX(-${visualPos * 100}%)`,
              transitionDuration: useSlideMotion ? `${slideMs}ms` : '0ms',
            }}
          >
            {trackSlides.map(({ frame, index }, slideIndex) => (
              <div
                key={`${frame.file}-${slideIndex}`}
                className="relative h-full min-w-full shrink-0"
              >
                <Image
                  src={phoneFlowSrc(frame.file)}
                  alt={frame.alt}
                  fill
                  unoptimized
                  className="object-contain object-center"
                  sizes="(min-width: 1280px) 310px, (min-width: 1024px) 280px, 300px"
                  priority={slideIndex === 0}
                  loading={slideIndex === 0 ? 'eager' : 'lazy'}
                  onLoad={() => markLoaded(index)}
                  onError={() => markFailed(index)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {!hideCaption &&
        (compact ? (
          hasAnyFrame && (
            <p className="home-meta mt-1.5 text-center" aria-live="polite">
              {activeFrame.label}
              {stepCount > 1 && (
                <span className="text-gray-300">
                  {' '}
                  · {activeStep}/{stepCount}
                </span>
              )}
            </p>
          )
        ) : (
          <>
            <p className="home-meta mt-2 text-center" aria-live="polite">
              {captionLine1}
            </p>
            {hasAnyFrame && stepCount > 1 && (
              <p className="home-meta mt-0.5 text-center">
                {activeFrame.label} · {activeStep}/{stepCount}
              </p>
            )}
          </>
        ))}
    </div>
  );
}

function PhonePlaceholder() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-xl bg-gradient-to-b from-brand-orange-light to-white p-3 text-center">
      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <span className="text-base text-brand-orange">+</span>
      </div>
      <p className="home-meta">chama.ai-1 … chama.ai-6</p>
    </div>
  );
}
