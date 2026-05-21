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
		"Apple Chips (Fresh)",
		"Bananas",
		{
			instructions: "Make sure to rinse them off in the sink.",
			name: "Blackberries",
		},
		"Blue Berries",
		{
			instructions: "Make sure to rinse them off in the sink.",
			name: "Cherries",
		},
		"Dragon Fruit",
		{
			name: "Dried Bananas",
			prerelease: true,
		},
		"Dried Mangos",
		"Kiwi",
		"Mandarin Oranges",
		"Pineapple",
		{
			instructions: "Make sure to rinse them off in the sink.",
			name: "Raspberry",
		},
		"Sliced Apples",
		{
			instructions: "Make sure to rinse them off in the sink.",
			name: "Strawberries",
		},
		"Watermelon",
		{
			name: "Apple Sauce",
			prerelease: true,
		},
		{
			name: "Fruit Leathers",
			prerelease: true,
		},
		{
			instructions:
				"Eat over the sink or a plate. Peaches can be really juicy.",
			name: "Fresh Peach",
		},
		"Canned Peaches",
		"Fresh Pear",
		"Canned Pears",
	] as FoodInput[]
).map(buildFood(CATEGORIES.fruit));
