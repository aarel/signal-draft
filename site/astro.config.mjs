import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://signaldraft.studio',
  integrations: [tailwind()],
  srcDir: './src',
  server: {
    host: true
  }
});
