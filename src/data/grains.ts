import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const GRAINS_FOODS = (
	[
		{
			name: "Banana Bars",
		},
		{
			name: "Banana Bread",
		},
		{
			name: "Blue Berry Muffin (Costco)",
		},
		{
			name: "Blue Berry Muffin (Fresh)",
		},
		{
			name: "Poppy Seed Muffin",
		},
		{
			name: "Cheetos",
		},
		{
			name: "Chocolate Muffin",
		},
		{
			instructions: [
				"Toast: Toast your bread to your desired darkness.",
				"Butter: Immediately spread softened butter onto the hot toast.",
				"Mix & Sprinkle: Sprinkle cinnamon-sugar over the buttered toast.",
			],
			name: "Cinnamon Toast",
		},
		{
			name: "Doritos",
		},
		{
			name: "Graham Crackers",
		},
		{
			name: "Granola Bar",
		},
		{
			name: "Japanese Cheesecake",
		},
		{
			name: "Lays Classic Chips",
		},
		{
			instructions: 'Press the "poporn" button on the microwave.',
			name: "Popcorn",
		},
		{
			name: "Pretzels (Crunchy)",
		},
		{
			name: "Rolls",
		},
		{
			name: "Soft Pretzels",
		},
		{
			name: "Tortilla Chips",
		},
		{
			name: "Cheese Nips",
			prerelease: true,
		},
		{
			name: "Cookie Crisp Cereal",
		},
		{
			name: "Fruit Loops",
			prerelease: true,
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.grains));
