import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const ENTREE_FOODS = (
	[
		{
			name: "Square Pizza",
			cookTime: { instructions: "Cook in oven", time: "10–12m" },
			info: "Preheat oven to 450°",
			instructions:
				"Unwrap pizza. Put parchment on a cooking sheet. Add pepperonis.",
		},
		"French Bread Pizza",
		"Tortilla Pizza",
		"Bread Pizza",
		{
			name: "Pigs in a Blanket",
			prerelease: true,
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.entree));
