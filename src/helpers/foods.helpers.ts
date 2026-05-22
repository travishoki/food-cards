import { TOP_CATEGORY_SUBCATEGORIES } from "../const/categories";
import { LOCATIONS } from "../const/locations.const";
import { toFoodSlug } from "../helpers";
import { Food } from "../types";

type FoodInputObject = Omit<
	Food,
	| "category_key"
	| "difficulty"
	| "image_url"
	| "locations"
	| "position"
	| "slug"
> & {
	difficulty?: Food["difficulty"];
	image_url?: string;
	locations?: Food["locations"];
	slug?: string;
};

export type FoodInput = string | FoodInputObject;

// Build a reverse map from subcategory key → top category key.
const TOP_OF_SUB: Record<string, string> = Object.fromEntries(
	Object.entries(TOP_CATEGORY_SUBCATEGORIES).flatMap(([top, subs]) =>
		subs.map((sub) => [sub, top]),
	),
);

export const buildFood =
	(category_key: string, total: number) =>
	(input: FoodInput, index: number): Food => {
		const food: FoodInputObject =
			typeof input === "string" ? { name: input } : input;
		const slug = food.slug || toFoodSlug(food.name);
		const top = TOP_OF_SUB[category_key];
		const image_url =
			food.image_url || `/graphics/${top}/${category_key}/${slug}.jpg`;

		return {
			...food,
			category_key,
			difficulty: food.difficulty ?? 1,
			image_url,
			locations: food.locations || [LOCATIONS.home],
			position: { index, total },
			slug,
		};
	};
