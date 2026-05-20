import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const FRUIT_FOODS = (
	[
		{
			difficulty: 1,
			instructions: [
				"Pull the grapes off the vine.",
				"Wash grapes in the sink.",
				"Put the grapes in a bowl.",
			],
			name: "Grapes",
		},
		{
			difficulty: 1,
			name: "Apple Chips (Fresh)",
		},
		{
			difficulty: 1,
			name: "Bananas",
		},
		{
			difficulty: 1,
			instructions: "Make sure to rinse them off in the sink.",
			name: "Blackberries",
		},
		{
			difficulty: 1,
			name: "Blue Berries",
		},
		{
			difficulty: 1,
			instructions: "Make sure to rinse them off in the sink.",
			name: "Cherries",
		},
		{
			difficulty: 1,
			name: "Dragon Fruit",
		},
		{
			difficulty: 1,
			name: "Dried Bananas",
			prerelease: true,
		},
		{
			difficulty: 1,
			name: "Dried Mangos",
		},
		{
			difficulty: 1,
			name: "Kiwi",
		},
		{
			difficulty: 1,
			name: "Mandarin Oranges",
		},
		{
			difficulty: 1,
			name: "Pineapple",
		},
		{
			difficulty: 1,
			instructions: "Make sure to rinse them off in the sink.",
			name: "Raspberry",
		},
		{
			difficulty: 1,
			name: "Sliced Apples",
		},
		{
			difficulty: 1,
			instructions: "Make sure to rinse them off in the sink.",
			name: "Strawberries",
		},
		{
			difficulty: 1,
			name: "Watermelon",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.fruit));
