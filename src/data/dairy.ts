import { CATEGORIES } from "./categories";
import { LOCATIONS } from "./locations.const";

import type { Food } from "../types";

export const DAIRY_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/snack/dairy/grated-cheese.jpg",
		locations: [LOCATIONS.home],
		name: "Grated Cheese",
		slug: "grated-cheese",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/dairy/gogurt.jpg",
		locations: [LOCATIONS.home],
		name: "Gogurt",
		slug: "gogurt",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.dairy })) as Food[];
