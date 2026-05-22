import { CATEGORIES } from "../../const/categories";
import { LOCATIONS } from "../../const/locations.const";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	"Apple Pie",
	"Brownies",
	"Chocolate Pie",
	{
		name: "Chocolate Pudding",
		prerelease: true,
	},
	{
		name: "Churro",
		locations: LOCATIONS["fast-food"],
	},
	"Cinnamon Roll",
	"Cookie",
	"Cookie Dough",
	{
		name: "Cookie Dough Pizza",
		locations: [LOCATIONS.restaurant],
	},
	{
		name: "Corn Bread",
		prerelease: true,
	},
	"Cupcake",
	"Donut",
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
	{
		name: "Jello",
		instructions: "Whipcream on top is a nice touch!",
	},
	"Mint Brownies",
	{
		name: "Mochi Cake",
		difficulty: 4,
	},
	{
		name: "Otter Pop",
		instructions: "Keeps you hydrated on a hot day.",
	},
	{
		name: "Peach Cobbler",
		difficulty: 5,
	},
	"Peanut Butter Bars",
	{
		name: "Popsicle",
		instructions: "Keeps you hydrated on a hot day.",
	},
	{
		name: "Smores",
		difficulty: 3,
	},
] as FoodInput[];

export const DESSERT_FOODS = items.map(
	buildFood(CATEGORIES.dessert, items.length),
);
