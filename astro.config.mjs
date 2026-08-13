import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pocho.tech',
  trailingSlash: 'never',
  redirects: {
    '/case-studies/dahlia-plus-agency': '/case-studies/event-production-agency',
    '/case-studies/matador-network': '/case-studies/travel-media-company',
    '/case-studies/tps-workforce-hub': '/case-studies/edtech-workforce-training',
    '/templates': '/services',
    '/services/done-for-you-setup': '/services',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  build: {
    format: 'file',
  },
});
