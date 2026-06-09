import { MetadataRoute } from 'next';
import { routing } from '@/src/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dual-design.am'; // futur domaine final

  // Liste des routes de chaque page
  const routes = ['', '/contact', '/services']; 

  // Génère les URLs pour chaque langue
  const sitemapEntries = routes.flatMap((route) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  );

  return sitemapEntries;
}