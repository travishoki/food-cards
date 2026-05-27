import { BRANDS } from "../../const/brands.const";
import { CATEGORIES } from "../../const/categories";
import { LOCATIONS } from "../../const/locations.const";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	{
		name: "Lemon Freeze",
		brand: BRANDS.CHICK_FIL_A,
		locations: LOCATIONS["fast-food"],
	},
	"Chocolate Milk",
	{
		name: "Frazzle",
		instructions: "Worth the trip to a gas station.",
		locations: LOCATIONS["fast-food"],
	},
	{
		name: "Gatorade",
		instructions:
			"Important to get electrolites when excercising and paying hard.",
	},
	"Hi-C Fruit Punch",
	{
		name: "Horchata",
		locations: LOCATIONS["fast-food"],
	},
	"Hot Chocolate",
	"Kool-Aid",
	"Lemonade",
	"Milk",
	{
		name: "Orange Julius",
		locations: LOCATIONS["fast-food"],
	},
	{
		name: "Powerade",
		instructions:
			"Important to get electrolites when excercising and paying hard.",
	},
	{
		name: "Rootbeer",
		instructions:
			"Great Grandpa Grovers favorite drinks! It will fix all that ails you!",
	},
	{
		name: "Rootbeer Freeze",
		brand: BRANDS.TACO_AMIGO,
		locations: LOCATIONS["fast-food"],
	},
	{
		name: "Slurpee",
		brand: BRANDS.SEVEN_ELEVEN,
		instructions: "Worth the trip to a gas station.",
		locations: LOCATIONS["fast-food"],
	},
	"Sprite",
	"Sunny D",
] as FoodInput[];

export const DRINKS_FOODS = items.map(
	buildFood(CATEGORIES.drinks, items.length),
);
