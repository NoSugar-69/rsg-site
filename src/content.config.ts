import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const products = defineCollection({
	loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/products/" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.union([z.string(), z.date()]),
			ogImage: image().optional(),
			moreInfo: z.string().optional(),
			// GridInfo: z.array(z.any()).optional(),
			// BlockInfo: z.object({
			// 	text: z.string().optional(),
			// }),
		}),
})

const pages = defineCollection({
	loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/pages/" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// keyswords: z.string().default("").optional(),
		ogImage: z.any().optional(),
	}),
})

export const collections = { products, pages }
