import { titleToSlug } from "./slug.helpers";
import { TOP_CATEGORY_SUBCATEGORIES } from "../const/categories";
import { LOCATIONS } from "../const/locations.const";
import { Food } from "../types";

type FoodInputObject = Omit<
	Food,
	"category_key" | "difficulty" | "image_url" | "location" | "slug"
> & {
	difficulty?: Food["difficulty"];
	image_url?: string;
	location?: Food["location"];
	slug?: string;
};

export type FoodInput = string | FoodInputObject;

// Build a reverse map from subcategory key → top category key.
const TOP_OF_SUB: Record<string, string> = Object.fromEntries(
	Object.entries(TOP_CATEGORY_SUBCATEGORIES).flatMap(([top, subs]) =>
		subs.map((sub) => [sub, top]),
	),
);

const createFoodSlug = (name: Food["name"], brand: Food["brand"]) => {
	const slug = titleToSlug(name);

	return brand ? `${slug}-${brand}` : slug;
};

export const buildFood =
	(category_key: string) =>
	(input: FoodInput): Food => {
		const food: FoodInputObject =
			typeof input === "string" ? { name: input } : input;
		const slug = createFoodSlug(food.name, food.brand);
		const top = TOP_OF_SUB[category_key];
		const imageUrl =
			food.image_url || `/graphics/${top}/${category_key}/${slug}.jpg`;

		return {
			...food,
			category_key,
			difficulty: food.difficulty ?? 1,
			image_url: imageUrl,
			location: food.location || LOCATIONS.home,
			slug,
		};
	};
