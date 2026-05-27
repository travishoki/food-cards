import { BRANDS } from "../../const/brands.const";
import { CATEGORIES } from "../../const/categories";
import { LOCATIONS } from "../../const/locations.const";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	"Bread Pizza",
	{
		name: "Dominos Pizza",
		locations: LOCATIONS.restaurant,
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
		locations: LOCATIONS.restaurant,
	},
	{
		name: "Papa Johnson's Pizza",
		locations: LOCATIONS.restaurant,
	},
	{
		name: "Papa Murphy's Pizza",
		locations: LOCATIONS.restaurant,
	},
	"PB&J",
	{
		name: "Pigs in a Blanket",
		prerelease: true,
	},
	{
		name: "Pizza Hut",
		locations: LOCATIONS.restaurant,
	},
	{
		name: "Pizza Pie Cafe",
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
