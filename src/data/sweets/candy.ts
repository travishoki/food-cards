import { buildFood, FoodInput } from "../../helpers/foods.helpers";
import { CATEGORIES } from "../categories";

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
