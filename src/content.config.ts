import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const landingsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/landings' }),
  schema: z.object({
    slug: z.string(),
    company: z.string(),
    headline: z.string(),
    subtitle: z.string(),
    cta: z.string(),
    problems: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    benefits: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    caseStudies: z.array(z.object({
      company: z.string(),
      challenge: z.string(),
      result: z.string(),
    })).optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = {
  landings: landingsCollection,
};
