import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tracks = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/tracks' }),
	schema: z.object({
		number: z.number(),
		title: z.string(),
	}),
});

export const collections = { tracks };
