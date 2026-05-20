import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const VEGETABLES_FOODS = (
	[
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Carrots",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.vegetables));
