import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const FRUIT_FOODS = (
	[
		{
			name: "Grapes",
			instructions: [
				"Pull the grapes off the vine.",
				"Wash grapes in the sink.",
				"Put the grapes in a bowl.",
			],
		},
		"Apple Chips (Fresh)",
		"Bananas",
		{
			name: "Blackberries",
			instructions: "Make sure to rinse them off in the sink.",
		},
		"Blue Berries",
		{
			name: "Cherries",
			instructions: "Make sure to rinse them off in the sink.",
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
			name: "Raspberry",
			instructions: "Make sure to rinse them off in the sink.",
		},
		"Sliced Apples",
		{
			name: "Strawberries",
			instructions: "Make sure to rinse them off in the sink.",
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
			name: "Fresh Peach",
			instructions:
				"Eat over the sink or a plate. Peaches can be really juicy.",
		},
		"Canned Peaches",
		"Fresh Pear",
		"Canned Pears",
	] as FoodInput[]
).map(buildFood(CATEGORIES.fruit));
