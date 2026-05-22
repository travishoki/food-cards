import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	"Carrots",
	{
		name: "Corn on the Cobb",
		prerelease: true,
	},
] as FoodInput[];

export const VEGETABLES_FOODS = items.map(
	buildFood(CATEGORIES.vegetables, items.length),
);
