import { defineConfig } from 'astro/config';

const SITE_URL = 'https://simplifycalculator.com';

export default defineConfig({
  site: SITE_URL,
  build: {
    format: 'directory',
  },
});
