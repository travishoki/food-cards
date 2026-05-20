import { CATEGORIES } from "./categories";
import { LOCATIONS } from "./locations.const";

import type { Food } from "../types";

export const ENTREE_FOODS: Food[] = [
	{
		cookTime: { instructions: "Cook in oven", time: "10–12m" },
		difficulty: 1,
		image_url: "/graphics/main/entree/square-pizza.jpg",
		info: "Preheat oven to 450°",
		instructions:
			"Unwrap pizza. Put parchment on a cooking sheet. Add pepperonis.",
		locations: [LOCATIONS.home],
		name: "Square Pizza",
		slug: "square-pizza",
	},
	{
		difficulty: 1,
		image_url: "/graphics/main/entree/french-bread-pizza.jpg",
		locations: [LOCATIONS.home],
		name: "French Bread Pizza",
		slug: "french-bread-pizza",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.entree })) as Food[];
