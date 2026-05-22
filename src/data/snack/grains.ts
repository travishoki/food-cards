import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

export const GRAINS_FOODS = (
	[
		"Banana Bars",
		"Banana Bread",
		"Blue Berry Muffin (Costco)",
		"Blue Berry Muffin (Fresh)",
		"Poppy Seed Muffin",
		"Cheetos",
		"Chocolate Muffin",
		{
			name: "Cinnamon Toast",
			instructions: [
				"Toast: Toast your bread to your desired darkness.",
				"Butter: Immediately spread softened butter onto the hot toast.",
				"Mix & Sprinkle: Sprinkle cinnamon-sugar over the buttered toast.",
			],
		},
		"Doritos",
		"Graham Crackers",
		"Granola Bar",
		"Japanese Cheesecake",
		"Lays Classic Chips",
		{
			name: "Popcorn",
			instructions: 'Press the "poporn" button on the microwave.',
		},
		"Pretzels (Crunchy)",
		"Rolls",
		"Soft Pretzels",
		"Tortilla Chips",
		{
			name: "Cheese Nips",
			prerelease: true,
		},
		"Cookie Crisp Cereal",
		{
			name: "Fruit Loops",
			prerelease: true,
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.grains));
