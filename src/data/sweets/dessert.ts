import { BRANDS } from "../../const/brands.const";
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
		location: LOCATIONS["fast-food"],
	},
	{
		name: "Churro (Cream Filled)",
		brand: BRANDS.BETOS,
		location: LOCATIONS["fast-food"],
	},
	{
		name: "Cinnamon Twists",
		brand: BRANDS.TACO_BELL,
		location: LOCATIONS["fast-food"],
	},
	"Cinnamon Roll",
	"Cookie",
	"Cookie Dough",
	{
		name: "Cookie Dough Pizza",
		brand: BRANDS.PIZZA_PIE_CAFE,
		location: LOCATIONS.restaurant,
	},
	{
		name: "Corn Bread",
		prerelease: true,
	},
	{
		name: "Cinnamon Tortilla",
		brand: BRANDS.COSTA_VIDA,
		location: LOCATIONS["fast-food"],
	},
	{
		name: "Cream Slush",
		brand: BRANDS.SONIC,
		location: LOCATIONS["fast-food"],
	},
	"Cupcake",
	"Donut",
	"Donut Holes",
	{
		name: "Frosty",
		brand: BRANDS.WENDYS,
		location: LOCATIONS["fast-food"],
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
	"Mochi",
	{
		name: "Mochi Cake",
		difficulty: 4,
	},
	"Mochi Ice Cream",
	"Orange Roll",
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
	"Rice Crispy Treat",
	"Rootbeer Float",
	"Scone (Honey Butter)",
	{
		name: "Smores",
		difficulty: 3,
	},
	{
		name: "Skillet Cookie",
		brand: BRANDS.CHILIS,
		location: LOCATIONS.restaurant,
	},
	{
		name: "Skillet Cookie",
		difficulty: 4,
		location: LOCATIONS.home,
	},
] as FoodInput[];

export const DESSERT_FOODS = items.map(buildFood(CATEGORIES.dessert));
