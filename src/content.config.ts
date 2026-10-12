import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Optional long-form copy for pages in the site map (src/site.ts).
// src/content/pages/services/seo.md is shown on /services/seo/.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({ description: z.string().optional() }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().default('opinions'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages, posts };
