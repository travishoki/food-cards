import { BRANDS } from "../../const/brands.const";
import { CATEGORIES } from "../../const/categories";
import { LOCATIONS } from "../../const/locations.const";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	"Bread Pizza",
	{
		name: "Dominos Pizza",
		brand: BRANDS.DOMINOS,
		locations: LOCATIONS["fast-food"],
	},
	"French Bread Pizza",
	{
		name: "Grilled Cheese",
		prerelease: true,
	},
	{
		name: "Little Caesar's Pizza",
		brand: BRANDS.LITTLE_CAESARS,
		locations: LOCATIONS["fast-food"],
	},
	{
		name: "Marco's Pizza",
		brand: BRANDS.MARCOS,
		locations: LOCATIONS["fast-food"],
	},
	{
		name: "Papa Johnson's Pizza",
		brand: BRANDS.PAPA_JOHNS,
		locations: LOCATIONS["fast-food"],
	},
	{
		name: "Papa Murphy's Pizza",
		brand: BRANDS.PAPA_MURPHYS,
		locations: LOCATIONS["fast-food"],
	},
	"PB&J",
	{
		name: "Pigs in a Blanket",
		prerelease: true,
	},
	{
		name: "Pizza Hut",
		brand: BRANDS.PIZZA_HUT,
		locations: LOCATIONS["fast-food"],
	},
	{
		name: "Pizza Pie Cafe",
		brand: BRANDS.PIZZA_PIE_CAFE,
		locations: LOCATIONS.restaurant,
	},
	{
		name: "Quesadilla",
		prerelease: true,
	},
	{
		name: "Square Pizza",
		cookTime: { instructions: "Cook in oven", time: "10–12m" },
		info: "Preheat oven to 450°",
		instructions:
			"Unwrap pizza. Put parchment on a cooking sheet. Add pepperonis.",
	},
	"Tortilla Pizza",
	{
		name: "Waffle Love",
		brand: BRANDS.WAFFLE_LOVE,
		locations: LOCATIONS.restaurant,
	},
] as FoodInput[];

export const ENTREE_FOODS = items.map(
	buildFood(CATEGORIES.entree, items.length),
);
