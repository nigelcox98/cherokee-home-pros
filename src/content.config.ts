import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pros = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pros' }),
  schema: z.object({
    name: z.string(),
    url: z.string().url().optional(),
    phone: z.string().optional(),
    city: z.string(),
    cities: z.array(z.string()),
    categories: z.array(
      z.enum([
        'septic',
        'plumbing',
        'pool',
        'roofing',
        'hvac',
        'electrical',
        'ev-charger',
        'tesla-body',
      ])
    ),
    emergency: z.boolean().default(false),
    licensed: z.boolean().default(true),
    notes: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { pros };
