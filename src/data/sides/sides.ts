import { BRANDS } from "../../const/brands.const";
import { CATEGORIES } from "../../const/categories";
import { LOCATIONS } from "../../const/locations.const";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	{
		name: "Aunty Anne's Pretzels",
		brand: BRANDS.AUNTY_ANNES,
		locations: LOCATIONS["fast-food"],
	},
	{
		name: "Bacon",
		difficulty: 3,
	},
	"Bagel with Spread",
	{
		name: "Breadsticks Little Ceasars",
		locations: LOCATIONS["fast-food"],
		prerelease: true,
	},
	{
		name: "Breadsticks",
		brand: BRANDS.OLIVE_GARDEN,
		locations: LOCATIONS.restaurant,
	},
	{
		name: "Cheese Sticks (Pizza)",
		difficulty: 2,
	},
	{
		name: "Waffle Fries",
		brand: BRANDS.CHICK_FIL_A,
		locations: LOCATIONS["fast-food"],
	},
	"Cinnamon Bites",
	{
		name: "Corn Doggies",
		difficulty: 2,
	},
	{
		name: "Cresaunts",
		prerelease: true,
	},
	"Crinkle Cut Fries",
	{
		name: "Crickle Cut Fries",
		brand: BRANDS.DEL_TACO,
		locations: LOCATIONS["fast-food"],
	},
	{
		name: "Curly Fries",
		brand: BRANDS.ARBYS,
		locations: LOCATIONS["fast-food"],
	},
	{
		name: "Pretzel Sticks",
		brand: BRANDS.DAIRY_QUEEN,
		locations: LOCATIONS["fast-food"],
	},
	"French Fries",
	{
		name: "Hashbrown",
		difficulty: 2,
		instructions: [
			"Toast in the toaster.",
			"Flip over and toast again to make it extra crunchy.",
		],
	},
	"Hashbrowns (shredded)",
	{
		name: "Mashed Potatoes",
		difficulty: 3,
		ingredients: ["Water", "Milk", "Butter", "Potato flakes"],
		instructions: [
			"Boil liquid: In a saucepan, bring the water, butter, and salt to a boil.",
			"Remove heat: Take the saucepan off the heat source.",
			"Add milk & flakes: Stir in the cold milk, then gently add the potato flakes.",
		],
	},
	"Pumpkin Bread",
	{
		name: "Scrambled Eggs",
		difficulty: 3,
		instructions: [
			"Prep the Eggs: Crack the eggs into a bowl. Add a pinch of salt and your milk or water, if using. Whisk until completely blended with no distinct streaks of egg white.",
			"Heat the Pan: Place a nonstick skillet over medium-low heat. Add the butter and let it melt and foam, but do not let it brown.",
			"Cook the Eggs: Pour the egg mixture into the pan. Let them sit for about 5 to 10 seconds, then use a heat-proof rubber spatula to gently pull the edges of the egg toward the center.",
			"Fold and Scramble: Continue pulling and folding the eggs slowly across the bottom of the pan to form large, soft curds.",
			"Remove from Heat: Take the pan off the heat just before the eggs are fully set and they still look a bit shiny or wet. The residual heat will finish cooking them.",
		],
	},
	{
		name: "Sonic Pretzle Twists",
		brand: BRANDS.SONIC,
		locations: LOCATIONS["fast-food"],
	},
	"Sour Dough Bread",
	{
		name: "Steak Fries",
		difficulty: 2,
		instructions: "Extra yummy with Red Robbin seasoning.",
	},
	{
		name: "Tater Tots",
		difficulty: 2,
	},
	{
		name: "Texas Roadhouse Rolls",
		brand: BRANDS.TEXAS_ROADHOUSE,
		locations: LOCATIONS.restaurant,
	},
	{
		name: "Texas Toast",
		cookTime: {
			instructions: "Cook in oven",
			time: "8m",
		},
		difficulty: 3,
		info: "Preheat oven to 425°",
		instructions: "Put parchment on a cooking sheet.",
	},
] as FoodInput[];

export const SIDES_FOODS = items.map(buildFood(CATEGORIES.sides, items.length));
