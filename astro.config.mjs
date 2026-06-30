import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://simplifycalculator.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
