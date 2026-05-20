import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const ENTREE_FOODS = (
	[
		{
			cookTime: { instructions: "Cook in oven", time: "10–12m" },
			difficulty: 1,
			info: "Preheat oven to 450°",
			instructions:
				"Unwrap pizza. Put parchment on a cooking sheet. Add pepperonis.",
			name: "Square Pizza",
		},
		{
			difficulty: 1,
			name: "French Bread Pizza",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.entree));
