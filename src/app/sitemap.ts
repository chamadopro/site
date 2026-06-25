import type { MetadataRoute } from 'next';
import { CATALOGO_ESTATICO, getAllEspecialidadePaths } from '@/lib/catalog';

const baseUrl = 'https://chamadopro.com.br';

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
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));

  for (const cat of CATALOGO_ESTATICO) {
    entries.push({
      url: `${baseUrl}/servicos/${cat.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  for (const { categoria, especialidade } of getAllEspecialidadePaths(CATALOGO_ESTATICO)) {
    entries.push({
      url: `${baseUrl}/servicos/${categoria}/${especialidade}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  }

  return entries;
}
