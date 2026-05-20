import { CATEGORIES } from "./categories";

import type { Food } from "../types";

export const CANDY_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/andes-mints.jpg",
		locations: ["home"],
		name: "Andes Mints",
		slug: "andes-mints",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/dubai-chocolate.jpg",
		locations: ["home"],
		name: "Dubai Chocolate",
		slug: "dubai-chocolate",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/kitkat.jpg",
		locations: ["home"],
		name: "KitKat",
		slug: "kitkat",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/milk-chocolate.jpg",
		locations: ["home"],
		name: "Milk Chocolate",
		slug: "milk-chocolate",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/nutella.jpg",
		locations: ["home"],
		name: "Nutella",
		slug: "nutella",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/twizzlers.jpg",
		locations: ["home"],
		name: "Twizzlers",
		slug: "twizzlers",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.candy })) as Food[];
