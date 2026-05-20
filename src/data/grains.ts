import { CATEGORIES } from "./categories";

import type { Food } from "../types";

export const GRAINS_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/banana-bars.jpg",
		name: "Banana Bars",
		slug: "banana-bars",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/banana-bread.jpg",
		name: "Banana Bread",
		slug: "banana-bread",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/blue-berry-muffin.jpg",
		name: "Blue Berry Muffin",
		slug: "blue-berry-muffin",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/cheetos.jpg",
		name: "Cheetos",
		slug: "cheetos",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/chocolate-muffin.jpg",
		name: "Chocolate Muffin",
		slug: "chocolate-muffin",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/cinnamon-toast.jpg",
		instructions: [
			"Toast: Toast your bread to your desired darkness.",
			"Butter: Immediately spread softened butter onto the hot toast.",
			"Mix & Sprinkle: Sprinkle cinnamon-sugar over the buttered toast.",
		],
		location: "home",
		name: "Cinnamon Toast",
		slug: "cinnamon-toast",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/doritos.jpg",
		name: "Doritos",
		slug: "doritos",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/graham-crackers.jpg",
		name: "Graham Crackers",
		slug: "graham-crackers",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/granola-bar.jpg",
		name: "Granola Bar",
		slug: "granola-bar",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/japanese-cheesecake.jpg",
		name: "Japanese Cheesecake",
		slug: "japanese-cheesecake",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/jello.jpg",
		instructions: "Whipcream on top is a nice touch!",
		name: "Jello",
		slug: "jello",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/lays-classic-chips.jpg",
		name: "Lays Classic Chips",
		slug: "lays-classic-chips",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/otter-pop.jpg",
		instructions: "Keeps you hydrated on a hot day.",
		name: "Otter Pop",
		slug: "otter-pop",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/popcorn.jpg",
		instructions: 'Press the "poporn" button on the microwave.',
		name: "Popcorn",
		slug: "popcorn",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/popsicle.jpg",
		instructions: "Keeps you hydrated on a hot day.",
		name: "Popsicle",
		slug: "popsicle",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/pretzels-crunchy.jpg",
		name: "Pretzels (Crunchy)",
		slug: "pretzels-crunchy",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/rolls.jpg",
		name: "Rolls",
		slug: "rolls",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/soft-pretzels.jpg",
		name: "Soft Pretzels",
		slug: "soft-pretzels",
	},
	{
		difficulty: 1,
		image_url: "/graphics/snack/grains/tortilla-chips.jpg",
		name: "Tortilla Chips",
		slug: "tortilla-chips",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.grains })) as Food[];
