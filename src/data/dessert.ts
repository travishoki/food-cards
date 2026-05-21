import { CATEGORIES } from "./categories";
import { LOCATIONS } from "../const/locations.const";
import { buildFood, FoodInput } from "../helpers/foods.helpers";

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
			name: "Cookie Dough Pizza",
			locations: [LOCATIONS.restaurant],
		},
		"Cupcake",
		{
			name: "Frosty",
			locations: [LOCATIONS["fast-food"]],
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
			name: "Peach Cobbler",
			difficulty: 5,
		},
		"Peanut Butter Bars",
		{
			name: "Mochi Cake",
			difficulty: 4,
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
			name: "Jello",
			instructions: "Whipcream on top is a nice touch!",
		},
		{
			name: "Otter Pop",
			instructions: "Keeps you hydrated on a hot day.",
		},
		{
			name: "Popsicle",
			instructions: "Keeps you hydrated on a hot day.",
		},
		{
			name: "Churro",
			locations: LOCATIONS["fast-food"],
		},
		{
			name: "Smores",
			difficulty: 3,
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.dessert));
