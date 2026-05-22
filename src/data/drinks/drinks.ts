import { CATEGORIES } from "../../const/categories";
import { LOCATIONS } from "../../const/locations.const";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	{
		name: "Chick-fil-A Lemon Freeze",
		locations: [LOCATIONS["fast-food"]],
	},
	"Chocolate Milk",
	{
		name: "Frazzle",
		instructions: "Worth the trip to a gas station.",
		locations: [LOCATIONS["fast-food"]],
	},
	{
		name: "Gatorade",
		instructions:
			"Important to get electrolites when excercising and paying hard.",
	},
	"Hi-C Fruit Punch",
	"Horchata",
	"Hot Chocolate",
	"Kool-Aid",
	"Lemonade",
	"Milk",
	"Orange Julius",
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
		name: "Rootbeer Freeze - Taco Amigo",
		locations: [LOCATIONS["fast-food"]],
	},
	{
		name: "Slurpee",
		instructions: "Worth the trip to a gas station.",
		locations: [LOCATIONS["fast-food"]],
	},
	"Sprite",
	"Sunny D",
] as FoodInput[];

export const DRINKS_FOODS = items.map(
	buildFood(CATEGORIES.drinks, items.length),
);
