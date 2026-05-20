import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const VEGETABLES_FOODS = (
	[
		{
			difficulty: 1,
			image_url: "/graphics/snack/vegetables/carrots.jpg",
			locations: [LOCATIONS.home],
			name: "Carrots",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.vegetables));
