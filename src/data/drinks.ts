import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const DRINKS_FOODS = (
	[
		"Milk",
		"Chocolate Milk",
		{
			instructions: "Worth the trip to a gas station.",
			locations: [LOCATIONS["fast-food"]],
			name: "Frazzle",
		},
		{
			instructions:
				"Important to get electrolites when excercising and paying hard.",
			name: "Gatorade",
		},
		"Hot Chocolate",
		"Kool-Aid",
		"Lemonade",
		"Orange Julius",
		{
			instructions:
				"Important to get electrolites when excercising and paying hard.",
			name: "Powerade",
		},
		{
			instructions:
				"Great Grandpa Grovers favorite drinks! It will fix all that ails you!",
			name: "Root Beer",
		},
		{
			instructions: "Worth the trip to a gas station.",
			locations: [LOCATIONS["fast-food"]],
			name: "Slurpee",
		},
		"Sprite",
		"Sunny D",
		"Horchata",
	] as FoodInput[]
).map(buildFood(CATEGORIES.drinks));
