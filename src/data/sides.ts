import { CATEGORIES } from "./categories";
import { LOCATIONS } from "./locations.const";

import type { Food } from "../types";

export const SIDES_FOODS: Food[] = [
	{
		difficulty: 3,
		image_url: "/graphics/sides/sides/mashed-potatoes.jpg",
		ingredients: ["Water", "Milk", "Butter", "Potato flakes"],
		instructions: [
			"Boil liquid: In a saucepan, bring the water, butter, and salt to a boil.",
			"Remove heat: Take the saucepan off the heat source.",
			"Add milk & flakes: Stir in the cold milk, then gently add the potato flakes.",
		],
		locations: [LOCATIONS.home],
		name: "Mashed Potatoes",
		slug: "mashed-potatoes",
	},
	{
		cookTime: {
			instructions: "Cook in oven",
			time: "8m",
		},
		difficulty: 3,
		image_url: "/graphics/sides/sides/texas-toast.jpg",
		info: "Preheat oven to 425°",
		instructions: "Put parchment on a cooking sheet.",
		locations: [LOCATIONS.home],
		name: "Texas Toast",
		slug: "texas-toast",
	},
	{
		difficulty: 3,
		image_url: "/graphics/sides/sides/bacon.jpg",
		locations: [LOCATIONS.home],
		name: "Bacon",
		slug: "bacon",
	},
	{
		difficulty: 2,
		image_url: "/graphics/sides/sides/breadsticks.jpg",
		locations: [LOCATIONS.home],
		name: "Breadsticks",
		slug: "breadsticks",
	},
	{
		difficulty: 2,
		image_url: "/graphics/sides/sides/cheese-sticks-pizza.jpg",
		locations: [LOCATIONS.home],
		name: "Cheese Sticks (Pizza)",
		slug: "cheese-sticks-pizza",
	},
	{
		difficulty: 2,
		image_url: "/graphics/sides/sides/corn-doggies.jpg",
		locations: [LOCATIONS.home],
		name: "Corn Doggies",
		slug: "corn-doggies",
	},
	{
		difficulty: 3,
		image_url: "/graphics/sides/sides/crinkle-cut-fries.jpg",
		locations: [LOCATIONS.home],
		name: "Crinkle Cut Fries",
		slug: "crinkle-cut-fries",
	},
	{
		difficulty: 3,
		image_url: "/graphics/sides/sides/french-fries.jpg",
		locations: [LOCATIONS.home],
		name: "French Fries",
		slug: "french-fries",
	},
	{
		difficulty: 2,
		image_url: "/graphics/sides/sides/hashbrown.jpg",
		instructions: [
			"Toast in the toaster.",
			"Flip over and toast again to make it extra crunchy.",
		],
		locations: [LOCATIONS.home],
		name: "Hashbrown",
		slug: "hashbrown",
	},
	{
		difficulty: 3,
		image_url: "/graphics/sides/sides/scrambled-eggs.jpg",
		instructions: [
			"Prep the Eggs: Crack the eggs into a bowl. Add a pinch of salt and your milk or water, if using. Whisk until completely blended with no distinct streaks of egg white.",
			"Heat the Pan: Place a nonstick skillet over medium-low heat. Add the butter and let it melt and foam, but do not let it brown.",
			"Cook the Eggs: Pour the egg mixture into the pan. Let them sit for about 5 to 10 seconds, then use a heat-proof rubber spatula to gently pull the edges of the egg toward the center.",
			"Fold and Scramble: Continue pulling and folding the eggs slowly across the bottom of the pan to form large, soft curds.",
			"Remove from Heat: Take the pan off the heat just before the eggs are fully set and they still look a bit shiny or wet. The residual heat will finish cooking them.",
		],
		locations: [LOCATIONS.home],
		name: "Scrambled Eggs",
		slug: "scrambled-eggs",
	},
	{
		difficulty: 2,
		image_url: "/graphics/sides/sides/steak-fries.jpg",
		instructions: "Extra yummy with Red Robbin seasoning.",
		locations: [LOCATIONS.home],
		name: "Steak Fries",
		slug: "steak-fries",
	},
	{
		difficulty: 2,
		image_url: "/graphics/sides/sides/tater-tots.jpg",
		locations: [LOCATIONS.home],
		name: "Tater Tots",
		slug: "tater-tots",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.sides })) as Food[];
