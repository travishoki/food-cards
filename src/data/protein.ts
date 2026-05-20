import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const PROTEIN_FOODS = (
	[
		{
			difficulty: 1,
			instructions:
				"Just a spoon fool of Peanut Butter can be a good snack.",
			locations: [LOCATIONS.home],
			name: "Peanut Butter",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Pepperoni",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Protein Bar",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.protein));
