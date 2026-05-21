import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const DESSERT_FOODS = (
	[
		"Donut",
		"Apple Pie",
		"Brownies",
		"Chocolate Pie",
		"Cinnamon Roll",
		"Cookie",
		"Cookie Dough",
		{
			locations: [LOCATIONS.restaurant],
			name: "Cookie Dough Pizza",
		},
		"Cupcake",
		{
			locations: [LOCATIONS["fast-food"]],
			name: "Frosty",
		},
		{
			name: "Fruit Pizza",
			toppings: [
				"Bananas",
				"Black Berries",
				"Blue Berries",
				"Mandarine Oranges",
				"Kiwis",
				"Rasperries",
				"Strawberries",
			],
		},
		"Ice Cream",
		"Mint Brownies",
		{
			difficulty: 5,
			name: "Peach Cobbler",
		},
		"Peanut Butter Bars",
		{
			difficulty: 4,
			name: "Mochi Cake",
		},
		{
			name: "Chocolate Pudding",
			prerelease: true,
		},
		{
			name: "Corn Bread",
			prerelease: true,
		},
		{
			instructions: "Whipcream on top is a nice touch!",
			name: "Jello",
		},
		{
			instructions: "Keeps you hydrated on a hot day.",
			name: "Otter Pop",
		},
		{
			instructions: "Keeps you hydrated on a hot day.",
			name: "Popsicle",
		},
		{
			locations: LOCATIONS["fast-food"],
			name: "Churro",
		},
		{
			difficulty: 3,
			name: "Smores",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.dessert));
