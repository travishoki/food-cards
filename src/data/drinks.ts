import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const DRINKS_FOODS = (
	[
		"Milk",
		"Chocolate Milk",
		{
			name: "Frazzle",
			instructions: "Worth the trip to a gas station.",
			locations: [LOCATIONS["fast-food"]],
		},
		{
			name: "Gatorade",
			instructions:
				"Important to get electrolites when excercising and paying hard.",
		},
		"Hot Chocolate",
		"Kool-Aid",
		"Lemonade",
		"Orange Julius",
		{
			name: "Powerade",
			instructions:
				"Important to get electrolites when excercising and paying hard.",
		},
		{
			name: "Root Beer",
			instructions:
				"Great Grandpa Grovers favorite drinks! It will fix all that ails you!",
		},
		{
			name: "Slurpee",
			instructions: "Worth the trip to a gas station.",
			locations: [LOCATIONS["fast-food"]],
		},
		"Sprite",
		"Sunny D",
		"Horchata",
	] as FoodInput[]
).map(buildFood(CATEGORIES.drinks));
