import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	{
		name: "Square Pizza",
		cookTime: { instructions: "Cook in oven", time: "10–12m" },
		info: "Preheat oven to 450°",
		instructions:
			"Unwrap pizza. Put parchment on a cooking sheet. Add pepperonis.",
	},
	"French Bread Pizza",
	"Tortilla Pizza",
	"Bread Pizza",
	{
		name: "Pigs in a Blanket",
		prerelease: true,
	},
] as FoodInput[];

export const ENTREE_FOODS = items.map(
	buildFood(CATEGORIES.entree, items.length),
);
