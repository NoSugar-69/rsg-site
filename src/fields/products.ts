import { collection, fields } from "@keystatic/core"
import { repeating, wrapper } from "@keystatic/core/content-components"

export const products = collection({
	label: "Товары",
	slugField: "title",
	path: "src/data/products/*",
	columns: ["title", "pubDate"],
	entryLayout: "content",
	format: { contentField: "content" },
	schema: {
		title: fields.slug({ name: { label: "Заголовок" } }),
		description: fields.text({
			label: "Описание",
			description: "от 20 до 150 символов",
		}),
		moreInfo: fields.text({ label: "Дополнительная информация" }),
		ogImage: fields.image({
			label: "Фото товара",
			directory: "src/assets/images/products",
			publicPath: "../../assets/images/products/",
		}),
		content: fields.mdx({
			label: "Контент",
			components: {
				GridInfo: repeating({
					label: "Контейнер",

					// Only allow Testimonial components
					children: ["BlockInfo"],
					schema: {
						// text: fields.text({ label: "Пусто" }),
					},
				}),
				BlockInfo: wrapper({
					label: "Блок ",
					schema: {
						// text: fields.text({ label: "Текст" }),
					},
				}),
			},
		}),
		pubDate: fields.date({
			label: "Время",
			description: "Время публикации",
		}),
		// keyswords: fields.text({
		// 	label: "",
		// }),
	},
})
