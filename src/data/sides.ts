import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const SIDES_FOODS = (
	[
		{
			difficulty: 3,
			ingredients: ["Water", "Milk", "Butter", "Potato flakes"],
			instructions: [
				"Boil liquid: In a saucepan, bring the water, butter, and salt to a boil.",
				"Remove heat: Take the saucepan off the heat source.",
				"Add milk & flakes: Stir in the cold milk, then gently add the potato flakes.",
			],
			locations: [LOCATIONS.home],
			name: "Mashed Potatoes",
		},
		{
			cookTime: {
				instructions: "Cook in oven",
				time: "8m",
			},
			difficulty: 3,
			info: "Preheat oven to 425°",
			instructions: "Put parchment on a cooking sheet.",
			locations: [LOCATIONS.home],
			name: "Texas Toast",
		},
		{
			difficulty: 3,
			locations: [LOCATIONS.home],
			name: "Bacon",
		},
		{
			difficulty: 2,
			locations: [LOCATIONS["fast-food"]],
			name: "Breadsticks",
		},
		{
			difficulty: 2,
			locations: [LOCATIONS.home],
			name: "Cheese Sticks (Pizza)",
		},
		{
			difficulty: 2,
			locations: [LOCATIONS.home],
			name: "Corn Doggies",
		},
		{
			difficulty: 3,
			locations: [LOCATIONS.home],
			name: "Crinkle Cut Fries",
		},
		{
			difficulty: 3,
			locations: [LOCATIONS.home],
			name: "French Fries",
		},
		{
			difficulty: 2,
			instructions: [
				"Toast in the toaster.",
				"Flip over and toast again to make it extra crunchy.",
			],
			locations: [LOCATIONS.home],
			name: "Hashbrown",
		},
		{
			difficulty: 3,
			instructions: [
				"Prep the Eggs: Crack the eggs into a bowl. Add a pinch of salt and your milk or water, if using. Whisk until completely blended with no distinct streaks of egg white.",
				"Heat the Pan: Place a nonstick skillet over medium-low heat. Add the butter and let it melt and foam, but do not let it brown.",
				"Cook the Eggs: Pour the egg mixture into the pan. Let them sit for about 5 to 10 seconds, then use a heat-proof rubber spatula to gently pull the edges of the egg toward the center.",
				"Fold and Scramble: Continue pulling and folding the eggs slowly across the bottom of the pan to form large, soft curds.",
				"Remove from Heat: Take the pan off the heat just before the eggs are fully set and they still look a bit shiny or wet. The residual heat will finish cooking them.",
			],
			locations: [LOCATIONS.home],
			name: "Scrambled Eggs",
		},
		{
			difficulty: 2,
			instructions: "Extra yummy with Red Robbin seasoning.",
			locations: [LOCATIONS.home],
			name: "Steak Fries",
		},
		{
			difficulty: 2,
			locations: [LOCATIONS.home],
			name: "Tater Tots",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.sides));
