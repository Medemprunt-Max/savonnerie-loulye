import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://savonnerieloulye.fr',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  trailingSlash: 'never',
});
