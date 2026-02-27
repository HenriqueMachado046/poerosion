import { defineCollection, z } from "astro:content";

const poemas = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()).optional().default([]),
        excerpt: z.string().optional(),
    }),
});

export const collections = { poemas }