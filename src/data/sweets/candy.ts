import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	"Andes Mints",
	"Dubai Chocolate",
	"KitKat",
	"Milk Chocolate",
	"Nutella",
	"Twizzlers",
	{
		name: "Twix",
		prerelease: true,
	},
] as FoodInput[];

export const CANDY_FOODS = items.map(buildFood(CATEGORIES.candy, items.length));
