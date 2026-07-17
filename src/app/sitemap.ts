import type { MetadataRoute } from 'next';
import { CIDADES_FASE_1 } from '@/lib/cidades';
import {
  CATALOGO_ESTATICO,
  getAllEspecialidadePaths,
  getAllLocalPaths,
} from '@/lib/catalog';
import { SITE_URL } from '@/lib/siteConfig';

const staticPages = [
  '',
  '/servicos',
  '/como-funciona',
  '/para-clientes',
  '/para-prestadores',
  '/sobre',
  '/contato',
  '/faq',
  '/parceiros',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  for (const cat of CATALOGO_ESTATICO) {
    entries.push({
      url: `${SITE_URL}/servicos/${cat.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  for (const { categoria, especialidade } of getAllEspecialidadePaths(CATALOGO_ESTATICO)) {
    entries.push({
      url: `${SITE_URL}/servicos/${categoria}/${especialidade}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  }

  const cidadeSlugs = CIDADES_FASE_1.map((c) => c.slug);
  for (const { categoria, especialidade, cidade } of getAllLocalPaths(
    CATALOGO_ESTATICO,
    cidadeSlugs
  )) {
    entries.push({
      url: `${SITE_URL}/servicos/${categoria}/${especialidade}/${cidade}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.55,
    });
  }

  return entries;
}
