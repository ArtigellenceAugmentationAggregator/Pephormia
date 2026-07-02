import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    bucket: z.string().default('General'),
    date: z.coerce.date(),
    readMins: z.number().default(6),
    sources: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const library = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    bucket: z.string().default('General'),
    kind: z.enum(['evidence-review', 'guide', 'tracker', 'briefing']).default('evidence-review'),
    price: z.string().default('Free'),      // 'Free' or e.g. 'A$9'
    pages: z.number().default(9),
    sources: z.number().default(0),
    pdf: z.string().optional(),             // /downloads/xxx.pdf
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, library };
