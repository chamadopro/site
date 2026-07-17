import { CIDADES_FASE_1, type Cidade } from '@/lib/cidades';

const STORAGE_KEY = 'chamadopro-location';

export type LocationSource = 'gps' | 'manual';

export type StoredLocation =
  | { mode: 'brasil'; source: LocationSource }
  | { mode: 'city'; slug: string; source: LocationSource };

export function normalizeCityName(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

/** Tenta associar nome vindo da geolocalização a uma cidade do catálogo. */
export function matchCidadeFromNames(...names: (string | undefined)[]): Cidade | undefined {
  const candidates = names.filter(Boolean).map((n) => normalizeCityName(n!));

  for (const cidade of CIDADES_FASE_1) {
    const normalized = normalizeCityName(cidade.nome);
    if (candidates.some((c) => c === normalized || c.includes(normalized) || normalized.includes(c))) {
      return cidade;
    }
  }

  const aliases: Record<string, string> = {
    'sao paulo': 'sao-paulo',
    'rio de janeiro': 'rio-de-janeiro',
    'belo horizonte': 'belo-horizonte',
    brasilia: 'brasilia',
    curitiba: 'curitiba',
    'porto alegre': 'porto-alegre',
    salvador: 'salvador',
    recife: 'recife',
    fortaleza: 'fortaleza',
    campinas: 'campinas',
  };

  for (const name of candidates) {
    const slug = aliases[name];
    if (slug) return CIDADES_FASE_1.find((c) => c.slug === slug);
  }

  return undefined;
}

export function readStoredLocation(): StoredLocation | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredLocation;
  } catch {
    return null;
  }
}

export function writeStoredLocation(location: StoredLocation): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(location));
}

export function requestDevicePosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocalização não suportada neste navegador.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 12_000,
      maximumAge: 300_000,
    });
  });
}

interface ReverseGeocodeResult {
  city?: string;
  locality?: string;
}

export async function reverseGeocode(lat: number, lon: number): Promise<Cidade | undefined> {
  const url = new URL('https://api.bigdatacloud.net/data/reverse-geocode-client');
  url.searchParams.set('latitude', String(lat));
  url.searchParams.set('longitude', String(lon));
  url.searchParams.set('localityLanguage', 'pt');

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error('Não foi possível identificar sua cidade.');

  const data = (await res.json()) as ReverseGeocodeResult;
  return matchCidadeFromNames(data.city, data.locality);
}

export async function detectCityFromDevice(): Promise<Cidade> {
  const position = await requestDevicePosition();
  const matched = await reverseGeocode(position.coords.latitude, position.coords.longitude);

  if (!matched) {
    throw new Error(
      'Sua cidade foi detectada, mas ainda não temos página local para ela. Escolha uma cidade próxima ou Todo o Brasil.'
    );
  }

  return matched;
}

export const DEFAULT_CIDADE = CIDADES_FASE_1[0];
