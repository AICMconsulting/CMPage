import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  build: {
    assets: 'assets'
  },
  site: 'https://your-azure-static-web-app-url.azurestaticapps.net',
  base: '/'
});