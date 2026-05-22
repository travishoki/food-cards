import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

export const PROTEIN_FOODS = (
	[
		{
			name: "Peanut Butter",
			instructions:
				"Just a spoon fool of Peanut Butter can be a good snack.",
		},
		"Pepperoni",
		"Protein Bar",
	] as FoodInput[]
).map(buildFood(CATEGORIES.protein));
