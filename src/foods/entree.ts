import { CATEGORIES } from "../categories";

import type { Food } from "../types";

export const ENTREE_FOODS: Food[] = [
	{
		category_key: CATEGORIES.entree,
		cookTime: { instructions: "Cook in oven", time: "10–12m" },
		id: 14,
		image_url: "/graphics/main/entree/square-pizza.jpg",
		info: "Preheat oven to 450°",
		instructions:
			"Unwrap pizza. Put parchment on a cooking sheet. Add pepperonis.",
		name: "Square Pizza",
	},
	{
		category_key: CATEGORIES.entree,
		id: 20,
		image_url: "/graphics/main/entree/french-bread-pizza.jpg",
		name: "French Bread Pizza",
	},
];
