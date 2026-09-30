import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Portable for Vercel (base "/") or GitHub Pages project sites (base "/repo/").
// Nothing in this repo deploys automatically.
const site = process.env.SITE || 'https://example.com';
const base = process.env.BASE || '/';

export default defineConfig({
  site,
  base,
  integrations: process.env.PREVIEW === '1' ? [] : [sitemap()],
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
