// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rehypeCustomIds from './src/lib/rehype-custom-ids.mjs';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx({
      rehypePlugins: [rehypeCustomIds],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});