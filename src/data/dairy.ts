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
		{
			name: "String Cheese",
			prerelease: true,
		},
		{
			name: "Baby Bell Cheese",
			prerelease: true,
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.dairy));
