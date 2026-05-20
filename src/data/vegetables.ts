import { CATEGORIES } from "./categories";
import { LOCATIONS } from "./locations.const";

import type { Food } from "../types";

export const VEGETABLES_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/snack/vegetables/carrots.jpg",
		locations: [LOCATIONS.home],
		name: "Carrots",
		slug: "carrots",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.vegetables })) as Food[];
