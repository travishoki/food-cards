import { buildFood, FoodInput } from "../../helpers/foods.helpers";
import { CATEGORIES } from "../categories";

export const VEGETABLES_FOODS = (
	[
		"Carrots",
		{
			name: "Corn on the Cobb",
			prerelease: true,
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.vegetables));
