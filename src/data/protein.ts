import { CATEGORIES } from "./categories";

import type { Food } from "../types";

export const PROTEIN_FOODS: Food[] = [
	{
		difficulty: 1,
		id: 3,
		image_url: "/graphics/snack/protein/peanut-butter.jpg",
		instructions: "Just a spoon fool of Peanut Butter can be a good snack.",
		name: "Peanut Butter",
		slug: "peanut-butter",
	},
	{
		difficulty: 1,
		id: 65,
		image_url: "/graphics/snack/protein/pepperoni.jpg",
		name: "Pepperoni",
		slug: "pepperoni",
	},
	{
		difficulty: 1,
		id: 66,
		image_url: "/graphics/snack/protein/protein-bar.jpg",
		name: "Protein Bar",
		slug: "protein-bar",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.protein })) as Food[];
