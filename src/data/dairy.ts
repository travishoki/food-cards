import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const DAIRY_FOODS = (
	[
		{
			name: "Grated Cheese",
		},
		{
			name: "Gogurt",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.dairy));
