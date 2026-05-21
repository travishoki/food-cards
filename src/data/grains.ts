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
			name: "Blue Berry Muffin",
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
			instructions: "Whipcream on top is a nice touch!",
			name: "Jello",
		},
		{
			name: "Lays Classic Chips",
		},
		{
			instructions: "Keeps you hydrated on a hot day.",
			name: "Otter Pop",
		},
		{
			instructions: 'Press the "poporn" button on the microwave.',
			name: "Popcorn",
		},
		{
			instructions: "Keeps you hydrated on a hot day.",
			name: "Popsicle",
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
	] as FoodInput[]
).map(buildFood(CATEGORIES.grains));
