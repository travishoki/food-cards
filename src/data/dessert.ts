import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const DESSERT_FOODS = (
	[
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Donut",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Apple Pie",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Brownies",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Chocolate Pie",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Cinnamon Roll",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Cookie",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Cookie Dough",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.restaurant],
			name: "Cookie Dough Pizza",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Cupcake",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS["fast-food"]],
			name: "Frosty",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
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
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Ice Cream",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Mint Brownies",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Peach Cobbler",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Peanut Butter Bars",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Mochi Cake",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.dessert));
