import { toFoodSlug } from "../helpers";
import { Food } from "../types";
import { TOP_CATEGORY_SUBCATEGORIES } from "./categories";

export type FoodInput = Omit<Food, "category_key" | "image_url" | "slug"> & {
	image_url?: string;
	slug?: string;
};

// Build a reverse map from subcategory key → top category key.
const TOP_OF_SUB: Record<string, string> = Object.fromEntries(
	Object.entries(TOP_CATEGORY_SUBCATEGORIES).flatMap(([top, subs]) =>
		subs.map((sub) => [sub, top]),
	),
);

export const buildFood =
	(category_key: string) =>
	(food: FoodInput): Food => {
		const slug = food.slug || toFoodSlug(food.name);
		const top = TOP_OF_SUB[category_key];
		const image_url =
			food.image_url || `/graphics/${top}/${category_key}/${slug}.jpg`;

		return {
			...food,
			category_key,
			image_url,
			slug,
		};
	};
