import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const PROTEIN_FOODS = (
	[
		{
			instructions:
				"Just a spoon fool of Peanut Butter can be a good snack.",
			name: "Peanut Butter",
		},
		{
			name: "Pepperoni",
		},
		{
			name: "Protein Bar",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.protein));
