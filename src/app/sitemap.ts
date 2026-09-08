import type { MetadataRoute } from 'next';
import { CATALOGO_ESTATICO, getAllSpecialties } from '@/lib/catalog';
import { SITE_URL } from '@/lib/siteConfig';

const staticPages = [
  { path: '', changeFrequency: 'daily' as const, priority: 1.0 },
  { path: '/servicos', changeFrequency: 'weekly' as const, priority: 0.9 },
  { path: '/como-funciona', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/para-clientes', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/para-prestadores', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/sobre', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: '/contato', changeFrequency: 'monthly' as const, priority: 0.6 },
  { path: '/faq', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/parceiros', changeFrequency: 'monthly' as const, priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 1. Páginas institucionais fixas
  const entries: MetadataRoute.Sitemap = staticPages.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // 2. Diretórios de Categorias (/servicos/construcao-reforma, etc.)
  for (const cat of CATALOGO_ESTATICO) {
    entries.push({
      url: `${SITE_URL}/servicos/${cat.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  }

  // 3. Páginas de Especialidades com URLs curtas e amigáveis (/servicos/pedreiro, /servicos/encanador, etc.)
  const allSpecialties = getAllSpecialties(CATALOGO_ESTATICO);
  for (const { especialidade } of allSpecialties) {
    entries.push({
      url: `${SITE_URL}/servicos/${especialidade.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  return entries;
}
