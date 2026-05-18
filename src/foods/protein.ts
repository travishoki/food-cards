import { CATEGORIES } from "../categories";

import type { Food } from "../types";

export const PROTEIN_FOODS: Food[] = [
	{
		category_key: CATEGORIES.protein,
		id: 3,
		image_url: "/graphics/snack/protein/peanut-butter.jpg",
		instructions: "Just a spoon fool of Peanut Butter can be a good snack.",
		name: "Peanut Butter",
		slug: "peanut-butter",
	},
	{
		category_key: CATEGORIES.protein,
		id: 65,
		image_url: "/graphics/snack/protein/pepperoni.jpg",
		name: "Pepperoni",
		slug: "pepperoni",
	},
	{
		category_key: CATEGORIES.protein,
		id: 66,
		image_url: "/graphics/snack/protein/protein-bar.jpg",
		name: "Protein Bar",
		slug: "protein-bar",
	},
];
