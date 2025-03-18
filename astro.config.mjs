import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://www.glowsalonwestclay.com/",
  base: "/",
  output: "static",
  integrations: [sitemap(), tailwindcss()],
});
