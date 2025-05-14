import { collection, fields } from "@keystatic/core"

export const pages = collection({
	label: "Страницы",
	slugField: "title",
	path: "src/data/pages/*",
	columns: ["title"],
	entryLayout: "content",
	format: { contentField: "content" },
	schema: {
		title: fields.slug({ name: { label: "Заголовок" } }),
		description: fields.text({
			label: "Описание",
			description: "от 20 до 150 символов",
		}),
		ogImage: fields.image({
			label: "OgImage 1200x630",
			directory: "public/pages/images",
		}),
		// keyswords: fields.text({
		// 	label: "",
		// }),
		content: fields.mdx({
			label: "Контент",
		}),

		// pubDate: fields.date({
		// 	label: "Время",
		// 	description: "Время публикации",
		// }),
	},
})
