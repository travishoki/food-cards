import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	"Andes Mints",
	"Dubai Chocolate",
	"Fruit Roll-Ups",
	"Fruit Snacks",
	"KitKat",
	"Milk Chocolate",
	"Nutella",
	{
		name: "Twix",
		prerelease: true,
	},
	"Twizzlers",
] as FoodInput[];

export const CANDY_FOODS = items.map(buildFood(CATEGORIES.candy, items.length));
