import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: "https://www.glowsalonwestclay.com/",
  base: "/",
  output: "static",
  integrations: [
    sitemap(), 
    tailwindcss(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      }
    })
  ],
});
