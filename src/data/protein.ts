import { CATEGORIES } from "./categories";
import { LOCATIONS } from "./locations.const";

import type { Food } from "../types";

export const PROTEIN_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/snack/protein/peanut-butter.jpg",
		instructions: "Just a spoon fool of Peanut Butter can be a good snack.",
		locations: [LOCATIONS.home],
		name: "Peanut Butter",
		slug: "peanut-butter",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/protein/pepperoni.jpg",
		locations: [LOCATIONS.home],
		name: "Pepperoni",
		slug: "pepperoni",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/protein/protein-bar.jpg",
		locations: [LOCATIONS.home],
		name: "Protein Bar",
		slug: "protein-bar",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.protein })) as Food[];
