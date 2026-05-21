import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";

export const BREAKFAST_FOODS = (
	[
		{
			difficulty: 4,
			ingredients: [
				"1 cup milk",
				"⅔ cup purpose flour",
				"2 large eggs",
				"2 ½ teaspoons vegetable oil, divided",
				"1 pinch salt",
			],
			name: "Crepes",
			recipe_link: "http://allrecipes.com/recipe/27188/crepes/",
			toppings: [
				"Strawberry",
				"Blue Berries",
				"Banana",
				"Carmel",
				"Chocolate Syrup",
				"Whipped Cream",
				"Powdered Sugar",
			],
		},
		{
			difficulty: 4,
			ingredients: [
				"1 egg",
				"1 tsp All Natural Pure Vanilla Extract",
				"½ tsp Ground Cinnamon",
				"¼ cup milk",
				"4 slices hearty sandwich bread",
			],
			instructions: [
				"Whisk egg, vanilla, and cinnamon in a shallow dish. Stir in milk.",
				"Dip bread slices in egg mixture, turning to coat evenly on both sides.",
				"Cook bread slices on a lightly greased nonstick griddle or skillet on medium heat until cooked through and browned on both sides.",
				"Serve with butter, sprinkled with powdered sugar and syrup. You can top with fresh fruit",
			],
			name: "French Toast",
			recipe_link:
				"https://www.mccormick.com/recipes/breakfast-brunch/quick-and-easy-french-toast",
		},
		{
			difficulty: 4,
			name: "Pancakes",
		},
		{
			difficulty: 4,
			info: "Preheat oven to 450°",
			ingredients: [
				"6 eggs",
				"1 cup milk",
				"1 cup flour",
				"¼ teaspoon salt",
				"6 tablespoons butter",
			],
			instructions: [
				"In blender or bowl, blend together eggs, milk, flour, and salt.",
				"Melt butter in 9x13 pan in oven.",
				"Remove pan from oven.",
				"Pour in batter.",
				"Return to oven and bake (without peeking) for 18 minutes.",
				"Pancake should be very high and puffy.",
				"Remove from oven and cut into 6 large squares.",
				"Serve immediately.",
			],
			name: "Puffy Oven Pancakes",
			recipe_link:
				"http://www.geniuskitchen.com/recipe/puffy-oven-pancake-or-hootin-annies-40772",
		},
		{
			difficulty: 5,
			ingredients: ["flour"],
			name: "Swedish Pancakes",
			toppings: [
				"Strawberry",
				"Blue Berries",
				"Banana",
				"Carmel",
				"Chocolate Syrup",
				"Whipped Cream",
				"Powdered Sugar",
			],
		},
		{
			difficulty: 4,
			name: "Fresh Waffles",
		},
		{
			instructions: ["Cook in the toaster", "Spread butter", "Add syrup"],
			name: "Eggo Waffles",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.breakfast));
