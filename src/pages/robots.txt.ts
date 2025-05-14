import type { APIRoute } from "astro"

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Omgilibot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`

export const GET: APIRoute = ({ site }) => {
	const sitemapURL = new URL("sitemap-index.xml", site)
	return new Response(getRobotsTxt(sitemapURL))
}
