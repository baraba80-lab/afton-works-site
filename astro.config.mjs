import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://afton.works',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
