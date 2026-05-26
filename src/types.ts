import type { Brand } from "./const/brands.const";
import type { Location } from "./const/locations.const";

export type Food = {
	brand?: Brand;
	category_key: string;
	cookTime?: { instructions: string; time: string };
	difficulty: 1 | 2 | 3 | 4 | 5;
	docId?: string;
	image_url: string;
	inStock?: boolean;
	info?: string;
	ingredients?: string[];
	instructions?: string | string[];
	locations: Location[];
	name: string;
	position: { index: number; total: number };
	prerelease?: boolean;
	recipe_link?: string;
	slug: string;
	toppings?: string[];
};
