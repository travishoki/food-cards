import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

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
			instructions: [
				"Toast: Toast your bread to your desired darkness.",
				"Butter: Immediately spread softened butter onto the hot toast.",
				"Mix & Sprinkle: Sprinkle cinnamon-sugar over the buttered toast.",
			],
			name: "Cinnamon Toast",
		},
		"Doritos",
		"Graham Crackers",
		"Granola Bar",
		"Japanese Cheesecake",
		"Lays Classic Chips",
		{
			instructions: 'Press the "poporn" button on the microwave.',
			name: "Popcorn",
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
