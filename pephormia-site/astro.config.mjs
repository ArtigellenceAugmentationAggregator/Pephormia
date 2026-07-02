import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom domain via Hostinger DNS → GitHub Pages.
// With a custom apex domain, base stays '/'.
export default defineConfig({
  site: 'https://pephormia.com',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
