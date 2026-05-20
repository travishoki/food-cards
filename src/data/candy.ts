import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const CANDY_FOODS = (
	[
		{
			difficulty: 1,
			name: "Andes Mints",
		},
		{
			difficulty: 1,
			name: "Dubai Chocolate",
		},
		{
			difficulty: 1,
			name: "KitKat",
		},
		{
			difficulty: 1,
			name: "Milk Chocolate",
		},
		{
			difficulty: 1,
			name: "Nutella",
		},
		{
			difficulty: 1,
			name: "Twizzlers",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.candy));
