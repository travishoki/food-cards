import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	"Grated Cheese",
	"Gogurt",
	{
		name: "String Cheese",
		prerelease: true,
	},
	{
		name: "Baby Bell Cheese",
		prerelease: true,
	},
] as FoodInput[];

export const DAIRY_FOODS = items.map(buildFood(CATEGORIES.dairy, items.length));
