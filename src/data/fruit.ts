import { CATEGORIES } from "./categories";

import type { Food } from "../types";

export const FRUIT_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/grapes.jpg",
		instructions: [
			"Pull the grapes off the vine.",
			"Wash grapes in the sink.",
			"Put the grapes in a bowl.",
		],
		name: "Grapes",
		slug: "grapes",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/apple-chips-fresh.jpg",
		name: "Apple Chips (Fresh)",
		slug: "apple-chips-fresh",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/bananas.jpg",
		location: "home",
		name: "Bananas",
		slug: "bananas",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/blackberries.jpg",
		instructions: "Make sure to rinse them off in the sink.",
		name: "Blackberries",
		slug: "blackberries",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/blue-berries.jpg",
		name: "Blue Berries",
		slug: "blue-berries",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/cherries.jpg",
		instructions: "Make sure to rinse them off in the sink.",
		name: "Cherries",
		slug: "cherries",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/dragon-fruit.jpg",
		name: "Dragon Fruit",
		slug: "dragon-fruit",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/dried-bananas.jpg",
		name: "Dried Bananas",
		prerelease: true,
		slug: "dried-bananas",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/dried-mangos.jpg",
		location: "home",
		name: "Dried Mangos",
		slug: "dried-mangos",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/kiwi.jpg",
		name: "Kiwi",
		slug: "kiwi",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/mandarin-oranges.jpg",
		name: "Mandarin Oranges",
		slug: "mandarin-oranges",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/pineapple.jpg",
		name: "Pineapple",
		slug: "pineapple",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/raspberry.jpg",
		instructions: "Make sure to rinse them off in the sink.",
		name: "Raspberry",
		slug: "raspberry",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/sliced-apples.jpg",
		name: "Sliced Apples",
		slug: "sliced-apples",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/strawberries.jpg",
		instructions: "Make sure to rinse them off in the sink.",
		name: "Strawberries",
		slug: "strawberries",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/fruit/watermelon.jpg",
		name: "Watermelon",
		slug: "watermelon",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.fruit })) as Food[];
