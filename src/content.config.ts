import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    image: z.string(),
    images: z.array(z.string()).optional(),
    description: z.string(),
    shortDescription: z.string(),
    category: z.enum(['savon', 'cosmetique', 'bougie', 'accessoire', 'coffret']),
    weight: z.string().optional(),
    ingredients: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    inStock: z.boolean().default(true),
  }),
});

export const collections = { products };
