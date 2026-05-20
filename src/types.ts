export type Food = {
	category_key: string;
	cookTime?: { instructions: string; time: string };
	difficulty: 1 | 2 | 3 | 4 | 5;
	id: number;
	image_url: string;
	info?: string;
	ingredients?: string[];
	instructions?: string | string[];
	name: string;
	prerelease?: boolean;
	recipe_link?: string;
	slug: string;
	toppings?: string[];
};

export type MenuSelection = "all" | string;
