import { Difficulty } from "./FoodsPage/Toolbar/DifficultyFilter.types";

import type { Brand } from "./const/brands.const";
import type { Location } from "./const/locations.const";

export type Food = {
	brand?: Brand;
	category_key: string;
	cookTime?: { instructions: string; time: string };
	difficulty: Difficulty;
	docId?: string;
	image_url: string;
	inStock?: boolean;
	info?: string;
	ingredients?: string[];
	instructions?: string | string[];
	location: Location;
	name: string;
	prerelease?: boolean;
	recipe_link?: string;
	slug: string;
	toppings?: string[];
};
