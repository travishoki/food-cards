import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const CANDY_FOODS = (
	[
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Andes Mints",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Dubai Chocolate",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "KitKat",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Milk Chocolate",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Nutella",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Twizzlers",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.candy));
