import { CATEGORIES } from "./categories";

import type { Food } from "../types";

export const CANDY_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/andes-mints.jpg",
		name: "Andes Mints",
		slug: "andes-mints",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/dubai-chocolate.jpg",
		name: "Dubai Chocolate",
		slug: "dubai-chocolate",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/kitkat.jpg",
		name: "KitKat",
		slug: "kitkat",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/milk-chocolate.jpg",
		name: "Milk Chocolate",
		slug: "milk-chocolate",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/nutella.jpg",
		name: "Nutella",
		slug: "nutella",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/twizzlers.jpg",
		name: "Twizzlers",
		slug: "twizzlers",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.candy })) as Food[];
