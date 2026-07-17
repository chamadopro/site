'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { CIDADES_FASE_1, type Cidade } from '@/lib/cidades';
import {
  DEFAULT_CIDADE,
  detectCityFromDevice,
  readStoredLocation,
  writeStoredLocation,
  type LocationSource,
} from '@/lib/geo';

export type LocationStatus = 'loading' | 'ready' | 'gps-denied' | 'gps-error';

interface CityContextValue {
  status: LocationStatus;
  mode: 'city' | 'brasil';
  cidade: Cidade | null;
  label: string;
  source: LocationSource | null;
  gpsMessage: string | null;
  setCidade: (slug: string) => void;
  setBrasil: () => void;
  refreshFromGps: () => Promise<void>;
}

const CityContext = createContext<CityContextValue | null>(null);

function cidadeBySlug(slug: string): Cidade | undefined {
  return CIDADES_FASE_1.find((c) => c.slug === slug);
}

export function CityProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<LocationStatus>('loading');
  const [mode, setMode] = useState<'city' | 'brasil'>('city');
  const [cidade, setCidadeState] = useState<Cidade | null>(null);
  const [source, setSource] = useState<LocationSource | null>(null);
  const [gpsMessage, setGpsMessage] = useState<string | null>(null);

  const applyCity = useCallback((next: Cidade, nextSource: LocationSource) => {
    setMode('city');
    setCidadeState(next);
    setSource(nextSource);
    setStatus('ready');
    setGpsMessage(null);
    writeStoredLocation({ mode: 'city', slug: next.slug, source: nextSource });
  }, []);

  const applyBrasil = useCallback((nextSource: LocationSource) => {
    setMode('brasil');
    setCidadeState(null);
    setSource(nextSource);
    setStatus('ready');
    setGpsMessage(null);
    writeStoredLocation({ mode: 'brasil', source: nextSource });
  }, []);

  const refreshFromGps = useCallback(async () => {
    setStatus('loading');
    setGpsMessage(null);
    try {
      const detected = await detectCityFromDevice();
      applyCity(detected, 'gps');
    } catch (err) {
      const geoError = err as GeolocationPositionError & Error;
      if (geoError?.code === 1) {
        setStatus('gps-denied');
        setGpsMessage('Permita o acesso à localização ou escolha uma cidade manualmente.');
      } else {
        setStatus('gps-error');
        setGpsMessage(
          geoError?.message ?? 'Não foi possível detectar sua localização. Escolha uma cidade.'
        );
      }
      applyCity(DEFAULT_CIDADE, 'manual');
    }
  }, [applyCity]);

  useEffect(() => {
    const stored = readStoredLocation();

    if (stored?.mode === 'brasil') {
      applyBrasil(stored.source);
      return;
    }

    if (stored?.mode === 'city') {
      const saved = cidadeBySlug(stored.slug);
      if (saved) {
        applyCity(saved, stored.source);
        return;
      }
    }

    void refreshFromGps();
    // Apenas na montagem inicial
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCidade = useCallback(
    (slug: string) => {
      const found = cidadeBySlug(slug);
      if (found) applyCity(found, 'manual');
    },
    [applyCity]
  );

  const setBrasil = useCallback(() => {
    applyBrasil('manual');
  }, [applyBrasil]);

  const label = useMemo(() => {
    if (mode === 'brasil') return 'Todo o Brasil';
    if (cidade) return `${cidade.nome}, ${cidade.uf}`;
    return 'Detectando localização…';
  }, [mode, cidade]);

  const value = useMemo<CityContextValue>(
    () => ({
      status,
      mode,
      cidade,
      label,
      source,
      gpsMessage,
      setCidade,
      setBrasil,
      refreshFromGps,
    }),
    [status, mode, cidade, label, source, gpsMessage, setCidade, setBrasil, refreshFromGps]
  );

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}

export function useCity(): CityContextValue {
  const ctx = useContext(CityContext);
  if (!ctx) throw new Error('useCity deve ser usado dentro de CityProvider');
  return ctx;
}
