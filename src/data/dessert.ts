import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const DESSERT_FOODS = (
	[
		{
			name: "Donut",
		},
		{
			name: "Apple Pie",
		},
		{
			name: "Brownies",
		},
		{
			name: "Chocolate Pie",
		},
		{
			name: "Cinnamon Roll",
		},
		{
			name: "Cookie",
		},
		{
			name: "Cookie Dough",
		},
		{
			locations: [LOCATIONS.restaurant],
			name: "Cookie Dough Pizza",
		},
		{
			name: "Cupcake",
		},
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
		{
			name: "Ice Cream",
		},
		{
			name: "Mint Brownies",
		},
		{
			difficulty: 5,
			name: "Peach Cobbler",
		},
		{
			name: "Peanut Butter Bars",
		},
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
