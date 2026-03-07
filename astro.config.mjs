import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: "https://www.glowsalonwestclay.com/",
  base: "/",
  output: "static",
  integrations: [
    sitemap({
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        const path = url.replace('https://www.glowsalonwestclay.com', '');

        if (path === '' || path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (path.startsWith('/services/hair-gallery') || path.startsWith('/services/bridal-gallery')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        } else if (path.startsWith('/services')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (path.startsWith('/blog/') && path !== '/blog') {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (path === '/blog' || path === '/team' || path === '/contact') {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }

        return item;
      },
    }),
    tailwindcss(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      }
    })
  ],
});
