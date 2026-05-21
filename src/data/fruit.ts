import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const FRUIT_FOODS = (
	[
		{
			instructions: [
				"Pull the grapes off the vine.",
				"Wash grapes in the sink.",
				"Put the grapes in a bowl.",
			],
			name: "Grapes",
		},
		{
			name: "Apple Chips (Fresh)",
		},
		{
			name: "Bananas",
		},
		{
			instructions: "Make sure to rinse them off in the sink.",
			name: "Blackberries",
		},
		{
			name: "Blue Berries",
		},
		{
			instructions: "Make sure to rinse them off in the sink.",
			name: "Cherries",
		},
		{
			name: "Dragon Fruit",
		},
		{
			name: "Dried Bananas",
			prerelease: true,
		},
		{
			name: "Dried Mangos",
		},
		{
			name: "Kiwi",
		},
		{
			name: "Mandarin Oranges",
		},
		{
			name: "Pineapple",
		},
		{
			instructions: "Make sure to rinse them off in the sink.",
			name: "Raspberry",
		},
		{
			name: "Sliced Apples",
		},
		{
			instructions: "Make sure to rinse them off in the sink.",
			name: "Strawberries",
		},
		{
			name: "Watermelon",
		},
		{
			name: "Apple Sauce",
			prerelease: true,
		},
		{
			name: "Fruit Leathers",
			prerelease: true,
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.fruit));
