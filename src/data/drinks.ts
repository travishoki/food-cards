import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const DRINKS_FOODS = (
	[
		{
			difficulty: 1,
			name: "Milk",
		},
		{
			difficulty: 1,
			name: "Chocolate Milk",
		},
		{
			difficulty: 1,
			instructions: "Worth the trip to a gas station.",
			locations: [LOCATIONS["fast-food"]],
			name: "Frazzle",
		},
		{
			difficulty: 1,
			instructions:
				"Important to get electrolites when excercising and paying hard.",
			name: "Gatorade",
		},
		{
			difficulty: 1,
			name: "Hot Chocolate",
		},
		{
			difficulty: 1,
			name: "Kool-Aid",
		},
		{
			difficulty: 1,
			name: "Lemonade",
		},
		{
			difficulty: 1,
			name: "Orange Julius",
		},
		{
			difficulty: 1,
			instructions:
				"Important to get electrolites when excercising and paying hard.",
			name: "Powerade",
		},
		{
			difficulty: 1,
			instructions:
				"Great Grandpa Grovers favorite drinks! It will fix all that ails you!",
			name: "Root Beer",
		},
		{
			difficulty: 1,
			instructions: "Worth the trip to a gas station.",
			locations: [LOCATIONS["fast-food"]],
			name: "Slurpee",
		},
		{
			difficulty: 1,
			name: "Sprite",
		},
		{
			difficulty: 1,
			name: "Sunny D",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.drinks));
