import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const GRAINS_FOODS = (
	[
		{
			difficulty: 1,
			name: "Banana Bars",
		},
		{
			difficulty: 1,
			name: "Banana Bread",
		},
		{
			difficulty: 1,
			name: "Blue Berry Muffin",
		},
		{
			difficulty: 1,
			name: "Cheetos",
		},
		{
			difficulty: 1,
			name: "Chocolate Muffin",
		},
		{
			difficulty: 1,
			instructions: [
				"Toast: Toast your bread to your desired darkness.",
				"Butter: Immediately spread softened butter onto the hot toast.",
				"Mix & Sprinkle: Sprinkle cinnamon-sugar over the buttered toast.",
			],
			name: "Cinnamon Toast",
		},
		{
			difficulty: 1,
			name: "Doritos",
		},
		{
			difficulty: 1,
			name: "Graham Crackers",
		},
		{
			difficulty: 1,
			name: "Granola Bar",
		},
		{
			difficulty: 1,
			name: "Japanese Cheesecake",
		},
		{
			difficulty: 1,
			instructions: "Whipcream on top is a nice touch!",
			name: "Jello",
		},
		{
			difficulty: 1,
			name: "Lays Classic Chips",
		},
		{
			difficulty: 1,
			instructions: "Keeps you hydrated on a hot day.",
			name: "Otter Pop",
		},
		{
			difficulty: 1,
			instructions: 'Press the "poporn" button on the microwave.',
			name: "Popcorn",
		},
		{
			difficulty: 1,
			instructions: "Keeps you hydrated on a hot day.",
			name: "Popsicle",
		},
		{
			difficulty: 1,
			name: "Pretzels (Crunchy)",
		},
		{
			difficulty: 1,
			name: "Rolls",
		},
		{
			difficulty: 1,
			name: "Soft Pretzels",
		},
		{
			difficulty: 1,
			name: "Tortilla Chips",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.grains));
