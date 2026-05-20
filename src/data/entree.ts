import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const ENTREE_FOODS = (
	[
		{
			cookTime: { instructions: "Cook in oven", time: "10–12m" },
			difficulty: 1,
			image_url: "/graphics/main/entree/square-pizza.jpg",
			info: "Preheat oven to 450°",
			instructions:
				"Unwrap pizza. Put parchment on a cooking sheet. Add pepperonis.",
			locations: [LOCATIONS.home],
			name: "Square Pizza",
		},
		{
			difficulty: 1,
			image_url: "/graphics/main/entree/french-bread-pizza.jpg",
			locations: [LOCATIONS.home],
			name: "French Bread Pizza",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.entree));
