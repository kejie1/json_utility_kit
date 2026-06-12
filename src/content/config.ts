import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    h1: z.string(),
    shortAnswer: z.string(),
    relatedToolLink: z.string(),
    relatedToolName: z.string(),
  }),
});

export const collections = { blog };
