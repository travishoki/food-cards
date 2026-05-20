import { CATEGORIES } from "./categories";
import { LOCATIONS } from "./locations.const";

import type { Food } from "../types";

export const CANDY_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/andes-mints.jpg",
		locations: [LOCATIONS.home],
		name: "Andes Mints",
		slug: "andes-mints",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/dubai-chocolate.jpg",
		locations: [LOCATIONS.home],
		name: "Dubai Chocolate",
		slug: "dubai-chocolate",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/kitkat.jpg",
		locations: [LOCATIONS.home],
		name: "KitKat",
		slug: "kitkat",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/milk-chocolate.jpg",
		locations: [LOCATIONS.home],
		name: "Milk Chocolate",
		slug: "milk-chocolate",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/nutella.jpg",
		locations: [LOCATIONS.home],
		name: "Nutella",
		slug: "nutella",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/candy/twizzlers.jpg",
		locations: [LOCATIONS.home],
		name: "Twizzlers",
		slug: "twizzlers",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.candy })) as Food[];
