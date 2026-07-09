// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://camilotaba.dev',

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  compressHTML: true,

  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },

  build: {
    inlineStylesheets: 'always',
  },
});
