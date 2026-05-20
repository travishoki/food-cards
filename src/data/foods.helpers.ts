import { toFoodSlug } from "../helpers";
import { Food } from "../types";

export type FoodInput = Omit<Food, "category_key" | "slug"> & {
	slug?: string;
};

export const buildFood =
	(category_key: string) =>
	(f: FoodInput): Food => ({
		...f,
		category_key,
		slug: f.slug || toFoodSlug(f.name),
	});
