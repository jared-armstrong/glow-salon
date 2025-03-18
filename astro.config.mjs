// @ts-check
import { defineConfig } from 'astro/config';
import dotenv from "dotenv";
import node from '@astrojs/node';

dotenv.config();

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  site: 'https://www.glowsalonwestclay.com',

  output: 'static',

  adapter: node({
    mode: 'standalone',
  })

});
