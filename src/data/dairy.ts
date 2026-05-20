import { CATEGORIES } from "./categories";

import type { Food } from "../types";

export const DAIRY_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/snack/dairy/grated-cheese.jpg",
		name: "Grated Cheese",
		slug: "grated-cheese",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/dairy/gogurt.jpg",
		name: "Gogurt",
		slug: "gogurt",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.dairy })) as Food[];
