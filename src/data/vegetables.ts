import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const VEGETABLES_FOODS = (
	[
		"Carrots",
		{
			name: "Corn on the Cobb",
			prerelease: true,
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.vegetables));
