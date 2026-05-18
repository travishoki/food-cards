import { CATEGORIES } from "../categories";

import type { Food } from "../types";

export const BREAKFAST_FOODS: Food[] = [
	{
		category_key: CATEGORIES.breakfast,
		id: 13,
		image_url: "/graphics/main/breakfast/crepes.jpg",
		ingredients: [
			"1 cup milk",
			"⅔ cup all-purpose flour",
			"2 large eggs",
			"2 ½ teaspoons vegetable oil, divided",
			"1 pinch salt",
		],
		name: "Crepes",
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
		category_key: CATEGORIES.breakfast,
		id: 15,
		image_url: "/graphics/main/breakfast/french-toast.jpg",
		ingredients: [
			"1 egg",
			"1 tsp All Natural Pure Vanilla Extract",
			"1/2 tsp Ground Cinnamon",
			"1/4 cup milk",
			"4 slices hearty sandwich bread",
		],
		instructions: [
			"To make this Easy French Toast Recipe: Whisk egg, vanilla, and cinnamon in a shallow dish. Stir in milk.",
			"Dip bread slices in egg mixture, turning to coat evenly on both sides.",
			"Cook bread slices on a lightly greased nonstick griddle or skillet on medium heat until cooked through and browned on both sides.",
			"Serve with butter, sprinkled with confectioners' sugar, or topped with fresh fruit. Also great with Easy Spiced Syrup (recipe follows), if desired.",
		],
		name: "French Toast",
	},
	{
		category_key: CATEGORIES.breakfast,
		id: 16,
		image_url: "/graphics/main/breakfast/pancakes.jpg",
		name: "Pancakes",
	},
	{
		category_key: CATEGORIES.breakfast,
		id: 17,
		image_url: "/graphics/main/breakfast/puffy-oven-pancakes.jpg",
		name: "Puffy Oven Pancakes",
	},
	{
		category_key: CATEGORIES.breakfast,
		id: 18,
		image_url: "/graphics/main/breakfast/swedish-pancakes.jpg",
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
		category_key: CATEGORIES.breakfast,
		id: 19,
		image_url: "/graphics/main/breakfast/waffles.jpg",
		name: "Waffles",
	},
	{
		category_key: CATEGORIES.breakfast,
		id: 97,
		image_url: "/graphics/main/breakfast/eggo-waffles.jpg",
		name: "Eggo Waffles",
	},
];
