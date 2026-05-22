import type { Location } from "./const/locations.const";

export type Food = {
	category_key: string;
	cookTime?: { instructions: string; time: string };
	difficulty: 1 | 2 | 3 | 4 | 5;
	image_url: string;
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

export type MenuSelection = "all" | string;
