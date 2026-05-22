import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	{
		name: "Peanut Butter",
		instructions: "Just a spoon fool of Peanut Butter can be a good snack.",
	},
	"Pepperoni",
	"Protein Bar",
] as FoodInput[];

export const PROTEIN_FOODS = items.map(
	buildFood(CATEGORIES.protein, items.length),
);
