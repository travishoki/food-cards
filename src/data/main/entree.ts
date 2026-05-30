import { BRANDS } from "../../const/brands.const";
import { CATEGORIES } from "../../const/categories";
import { LOCATIONS } from "../../const/locations.const";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	{
		name: "Bread Pizza",
		instructions: [
			"Toast the bread",
			"Spread the pizza sauce",
			"Top with cheese and pepperonis",
		],
	},
	{
		name: "Chicken Nuggets",
		brand: BRANDS.MCDONALDS,
		location: LOCATIONS["fast-food"],
	},
	{
		name: "Pizza",
		brand: BRANDS.DOMINOS,
		location: LOCATIONS["fast-food"],
	},
	{
		name: "French Bread Pizza",
		brand: BRANDS.RED_BARON,
		info: "Preheat Air Fryer to 375° for 8 minutes",
		instructions: [
			"Unwrap the pizza, ypou can scrape off frost",
			"Add additional pepperoni's",
		],
	},
	{
		name: "Grilled Cheese",
		prerelease: true,
	},
	{
		name: "Pizza",
		brand: BRANDS.LITTLE_CAESARS,
		location: LOCATIONS["fast-food"],
	},
	{
		name: "Pizza",
		brand: BRANDS.MARCOS,
		location: LOCATIONS["fast-food"],
	},
	{
		name: "Pizza",
		brand: BRANDS.PAPA_JOHNS,
		location: LOCATIONS["fast-food"],
	},
	{
		name: "Pizza",
		brand: BRANDS.PAPA_MURPHYS,
		location: LOCATIONS["fast-food"],
	},
	"PB&J",
	{
		name: "Pigs in a Blanket",
		prerelease: true,
	},
	{
		name: "Pizza",
		brand: BRANDS.COSTCO,
		location: LOCATIONS["fast-food"],
	},
	{
		name: "Pizza",
		brand: BRANDS.PIZZA_HUT,
		location: LOCATIONS["fast-food"],
	},
	{
		name: "Pizza",
		brand: BRANDS.PIZZA_PIE_CAFE,
		location: LOCATIONS.restaurant,
	},
	{
		name: "Quesadilla",
		prerelease: true,
	},
	{
		name: "Square Pizza",
		brand: BRANDS.TOSTINOS,
		cookTime: { instructions: "Cook in oven", time: "10–12m" },
		info: "Preheat oven to 450°",
		instructions:
			"Unwrap pizza. Put parchment on a cooking sheet. Add pepperonis.",
	},
	"Tortilla Pizza",
] as FoodInput[];

export const ENTREE_FOODS = items.map(buildFood(CATEGORIES.entree));
