import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const PROTEIN_FOODS = (
	[
		{
			difficulty: 1,
			instructions:
				"Just a spoon fool of Peanut Butter can be a good snack.",
			name: "Peanut Butter",
		},
		{
			difficulty: 1,
			name: "Pepperoni",
		},
		{
			difficulty: 1,
			name: "Protein Bar",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.protein));
