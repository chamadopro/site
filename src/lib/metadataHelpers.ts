import type { Metadata } from 'next';
import {
  DEFAULT_OG_IMAGE,
  OG_IMAGE_VERSION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from '@/lib/siteConfig';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  /** Título do preview (WhatsApp/Facebook). Default: `{title} | ChamadoPro`. */
  ogTitle?: string;
  ogImage?: string;
}

function ogImageUrl(path: string): string {
  const base = absoluteUrl(path);
  const sep = base.includes('?') ? '&' : '?';
  return `${base}${sep}v=${OG_IMAGE_VERSION}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const shareTitle = ogTitle ?? `${title} | ${SITE_NAME}`;
  const image = ogImageUrl(ogImage);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: shareTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'pt_BR',
      type: 'website',
      images: [
        {
          url: image,
          width: 1024,
          height: 1024,
          alt: SITE_NAME,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      // `summary` = miniatura quadrada na lateral (igual ao app.chamadopro.com.br)
      card: 'summary',
      title: shareTitle,
      description,
      images: [image],
    },
  };
}

export { SITE_URL, SITE_NAME, absoluteUrl };
