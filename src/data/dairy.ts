import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "../helpers/foods.helpers";

export const DAIRY_FOODS = (
	[
		"Grated Cheese",
		"Gogurt",
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
