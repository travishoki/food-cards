import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const VEGETABLES_FOODS = (
	[
		{
			difficulty: 1,
			name: "Carrots",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.vegetables));
