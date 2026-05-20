import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const DAIRY_FOODS = (
	[
		{
			difficulty: 1,
			name: "Grated Cheese",
		},
		{
			difficulty: 1,
			name: "Gogurt",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.dairy));
