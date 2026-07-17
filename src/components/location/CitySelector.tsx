'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Globe, Loader2, MapPin, Navigation } from 'lucide-react';
import { useCity } from '@/context/CityContext';
import { CIDADES_FASE_1 } from '@/lib/cidades';
import { audienceClasses } from '@/lib/audienceColors';
import { cn } from '@/lib/cn';

interface CitySelectorProps {
  className?: string;
  compact?: boolean;
}

export function CitySelector({ className, compact }: CitySelectorProps) {
  const { status, mode, cidade, label, gpsMessage, setCidade, setBrasil, refreshFromGps } =
    useCity();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  const loading = status === 'loading';

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        type="button"
        className={cn(
          'inline-flex max-w-full items-center gap-1.5 rounded-lg border border-cp-border bg-cp-surface px-2.5 py-1.5 text-left text-xs font-medium text-cp-text-primary transition-colors hover:bg-cp-surface-muted sm:gap-2 sm:px-3 sm:text-sm',
          compact && 'py-1 text-xs'
        )}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {loading ? (
          <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-cp-accent" />
        ) : (
          <MapPin className="h-3.5 w-3.5 shrink-0 text-cp-accent" />
        )}
        <span className="truncate">
          {loading ? 'Detectando…' : compact ? label.split(',')[0] : label}
        </span>
        <ChevronDown className="h-3.5 w-3.5 shrink-0 text-cp-text-secondary" />
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute right-0 z-50 mt-1 w-64 rounded-cp-card border border-cp-border bg-cp-surface p-2 shadow-lg sm:w-72"
        >
          {gpsMessage && (
            <p className="mb-2 rounded-lg bg-cp-accent-soft px-2.5 py-2 text-xs text-cp-text-secondary">
              {gpsMessage}
            </p>
          )}

          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm hover:bg-cp-surface-muted"
            onClick={() => {
              void refreshFromGps();
              setOpen(false);
            }}
          >
            <Navigation className="h-4 w-4 text-cp-accent" />
            Usar minha localização (GPS)
          </button>

          <button
            type="button"
            className={cn(
              'flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-sm hover:bg-cp-surface-muted',
              mode === 'brasil' && 'bg-cp-surface-muted font-medium'
            )}
            onClick={() => {
              setBrasil();
              setOpen(false);
            }}
          >
            <Globe className="h-4 w-4 text-cp-text-secondary" />
            Todo o Brasil
          </button>

          <div className="my-2 border-t border-cp-border" />

          <p className="px-2.5 pb-1 text-xs font-medium text-cp-text-secondary">
            Selecionar cidade
          </p>
          <ul className="max-h-48 overflow-y-auto">
            {CIDADES_FASE_1.map((c) => (
              <li key={c.slug}>
                <button
                  type="button"
                  className={cn(
                    'w-full rounded-lg px-2.5 py-2 text-left text-sm hover:bg-cp-surface-muted',
                    mode === 'city' &&
                      cidade?.slug === c.slug &&
                      'bg-cp-accent-soft font-medium text-cp-accent'
                  )}
                  onClick={() => {
                    setCidade(c.slug);
                    setOpen(false);
                  }}
                >
                  {c.nome}, {c.uf}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function LocationBanner({ className }: { className?: string }) {
  const { label, mode, source, status } = useCity();
  const client = audienceClasses.client;

  if (status === 'loading') {
    return (
      <p className={cn('text-xs text-cp-text-secondary', className)}>
        Detectando sua localização…
      </p>
    );
  }

  return (
    <p className={cn('text-xs text-cp-text-secondary', className)}>
      <span className={cn('font-medium', client.text)}>
        {mode === 'brasil' ? 'Exibindo serviços em todo o Brasil' : `Sua localização: ${label}`}
      </span>
      {source === 'gps' && mode === 'city' && (
        <span className="ml-1 text-cp-text-disabled">(detectada automaticamente)</span>
      )}
    </p>
  );
}
