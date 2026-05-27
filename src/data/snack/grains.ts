import { BRANDS } from "../../const/brands.const";
import { CATEGORIES } from "../../const/categories";
import { buildFood, FoodInput } from "../../helpers/foods.helpers";

const items = [
	"Banana Bars",
	"Banana Bread",
	{
		name: "Blue Berry Muffin",
		brand: BRANDS.COSTCO,
	},
	"Blue Berry Muffin (Fresh)",
	{
		name: "Cheese Nips",
		prerelease: true,
	},
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
	"Cookie Crisp Cereal",
	"Doritos",
	{
		name: "Fruit Loops",
		prerelease: true,
	},
	"Graham Crackers",
	"Granola Bar",
	"Japanese Cheesecake",
	"Lays Classic Chips",
	{
		name: "Popcorn",
		instructions: 'Press the "poporn" button on the microwave.',
	},
	"Poppy Seed Muffin",
	"Pretzels (Crunchy)",
	"Rolls",
	"Soft Pretzels",
	"Tortilla Chips",
] as FoodInput[];

export const GRAINS_FOODS = items.map(
	buildFood(CATEGORIES.grains, items.length),
);
