import { toFoodSlug } from "../helpers";
import { Food } from "../types";
import { TOP_CATEGORY_SUBCATEGORIES } from "./categories";
import { LOCATIONS } from "./locations.const";

export type FoodInput = Omit<
	Food,
	"category_key" | "difficulty" | "image_url" | "locations" | "slug"
> & {
	difficulty?: Food["difficulty"];
	image_url?: string;
	locations?: Food["locations"];
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
			difficulty: food.difficulty ?? 1,
			image_url,
			locations: food.locations || [LOCATIONS.home],
			slug,
		};
	};
