import { defineCollection, z } from 'astro:content';

const rulebookCollection = defineCollection({
  type: 'content', // v2.5.0以降は'data'または'content'
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    showToc: z.boolean().optional().default(true),
  }),
});

export const collections = {
  'rulebook': rulebookCollection,
};
