import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const GRAINS_FOODS = (
	[
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Banana Bars",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Banana Bread",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Blue Berry Muffin",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Cheetos",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Chocolate Muffin",
		},
		{
			difficulty: 1,
			instructions: [
				"Toast: Toast your bread to your desired darkness.",
				"Butter: Immediately spread softened butter onto the hot toast.",
				"Mix & Sprinkle: Sprinkle cinnamon-sugar over the buttered toast.",
			],
			locations: [LOCATIONS.home],
			name: "Cinnamon Toast",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Doritos",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Graham Crackers",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Granola Bar",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Japanese Cheesecake",
		},
		{
			difficulty: 1,
			instructions: "Whipcream on top is a nice touch!",
			locations: [LOCATIONS.home],
			name: "Jello",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Lays Classic Chips",
		},
		{
			difficulty: 1,
			instructions: "Keeps you hydrated on a hot day.",
			locations: [LOCATIONS.home],
			name: "Otter Pop",
		},
		{
			difficulty: 1,
			instructions: 'Press the "poporn" button on the microwave.',
			locations: [LOCATIONS.home],
			name: "Popcorn",
		},
		{
			difficulty: 1,
			instructions: "Keeps you hydrated on a hot day.",
			locations: [LOCATIONS.home],
			name: "Popsicle",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Pretzels (Crunchy)",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Rolls",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Soft Pretzels",
		},
		{
			difficulty: 1,
			locations: [LOCATIONS.home],
			name: "Tortilla Chips",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.grains));
