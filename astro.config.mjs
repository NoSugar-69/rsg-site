import mdx from "@astrojs/mdx"
import partytown from "@astrojs/partytown"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import keystatic from "@keystatic/astro"
import icon from "astro-icon"
import metaTags from "astro-meta-tags"
import { defineConfig } from "astro/config"

import netlify from "@astrojs/netlify"

export default defineConfig({
	site: "https://rsg-valve.kz",

	prefetch: {
		defaultStrategy: "viewport",
		prefetchAll: true,
	},

	integrations: [
		mdx(),
		keystatic(),
		sitemap(),
		icon(),
		tailwind({
			applyBaseStyles: false,
		}),
		// Для одновременного потока выполнения внешних скриптов.
		partytown(),
		metaTags(),
		react(),
	],

	output: "static",
	adapter: netlify(),
})
