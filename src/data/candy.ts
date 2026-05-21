import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "../helpers/foods.helpers";

export const CANDY_FOODS = (
	[
		"Andes Mints",
		"Dubai Chocolate",
		"KitKat",
		"Milk Chocolate",
		"Nutella",
		"Twizzlers",
		{
			name: "Twix",
			prerelease: true,
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.candy));
