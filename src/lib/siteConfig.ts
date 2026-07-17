export const SITE_URL = 'https://chamadopro.com.br';
export const SITE_NAME = 'ChamadoPro';
/** Imagem oficial de compartilhamento (Open Graph / Twitter) — não usar favicon. */
export const DEFAULT_OG_IMAGE = '/og-share.png';

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
