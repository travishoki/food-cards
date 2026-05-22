import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	{
		name: "Baby Bell Cheese",
		prerelease: true,
	},
	"Gogurt",
	"Grated Cheese",
	{
		name: "String Cheese",
		prerelease: true,
	},
] as FoodInput[];

export const DAIRY_FOODS = items.map(buildFood(CATEGORIES.dairy, items.length));
