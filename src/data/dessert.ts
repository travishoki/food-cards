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
			name: "Peach Cobbler",
		},
		{
			name: "Peanut Butter Bars",
		},
		{
			name: "Mochi Cake",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.dessert));
