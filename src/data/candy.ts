import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const CANDY_FOODS = (
	[
		{
			name: "Andes Mints",
		},
		{
			name: "Dubai Chocolate",
		},
		{
			name: "KitKat",
		},
		{
			name: "Milk Chocolate",
		},
		{
			name: "Nutella",
		},
		{
			name: "Twizzlers",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.candy));
