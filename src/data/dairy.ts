import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const DAIRY_FOODS = (
	[
		{
			difficulty: 1,
			image_url: "/graphics/snack/dairy/grated-cheese.jpg",
			locations: [LOCATIONS.home],
			name: "Grated Cheese",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/dairy/gogurt.jpg",
			locations: [LOCATIONS.home],
			name: "Gogurt",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.dairy));
