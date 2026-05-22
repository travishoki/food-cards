import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	"Apple Chips (Fresh)",
	{
		name: "Apple Sauce",
		prerelease: true,
	},
	"Bananas",
	{
		name: "Blackberries",
		instructions: "Make sure to rinse them off in the sink.",
	},
	"Blue Berries",
	"Canned Peaches",
	"Canned Pears",
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
	{
		name: "Fresh Peach",
		instructions:
			"Eat over the sink or a plate. Peaches can be really juicy.",
	},
	"Fresh Pear",
	{
		name: "Fruit Leathers",
		prerelease: true,
	},
	{
		name: "Grapes",
		instructions: [
			"Pull the grapes off the vine.",
			"Wash grapes in the sink.",
			"Put the grapes in a bowl.",
		],
	},
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
] as FoodInput[];

export const FRUIT_FOODS = items.map(buildFood(CATEGORIES.fruit, items.length));
