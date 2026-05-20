import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const FRUIT_FOODS = (
	[
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/grapes.jpg",
			instructions: [
				"Pull the grapes off the vine.",
				"Wash grapes in the sink.",
				"Put the grapes in a bowl.",
			],
			locations: [LOCATIONS.home],
			name: "Grapes",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/apple-chips-fresh.jpg",
			locations: [LOCATIONS.home],
			name: "Apple Chips (Fresh)",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/bananas.jpg",
			locations: [LOCATIONS.home],
			name: "Bananas",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/blackberries.jpg",
			instructions: "Make sure to rinse them off in the sink.",
			locations: [LOCATIONS.home],
			name: "Blackberries",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/blue-berries.jpg",
			locations: [LOCATIONS.home],
			name: "Blue Berries",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/cherries.jpg",
			instructions: "Make sure to rinse them off in the sink.",
			locations: [LOCATIONS.home],
			name: "Cherries",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/dragon-fruit.jpg",
			locations: [LOCATIONS.home],
			name: "Dragon Fruit",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/dried-bananas.jpg",
			locations: [LOCATIONS.home],
			name: "Dried Bananas",
			prerelease: true,
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/dried-mangos.jpg",
			locations: [LOCATIONS.home],
			name: "Dried Mangos",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/kiwi.jpg",
			locations: [LOCATIONS.home],
			name: "Kiwi",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/mandarin-oranges.jpg",
			locations: [LOCATIONS.home],
			name: "Mandarin Oranges",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/pineapple.jpg",
			locations: [LOCATIONS.home],
			name: "Pineapple",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/raspberry.jpg",
			instructions: "Make sure to rinse them off in the sink.",
			locations: [LOCATIONS.home],
			name: "Raspberry",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/sliced-apples.jpg",
			locations: [LOCATIONS.home],
			name: "Sliced Apples",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/strawberries.jpg",
			instructions: "Make sure to rinse them off in the sink.",
			locations: [LOCATIONS.home],
			name: "Strawberries",
		},
		{
			difficulty: 1,
			image_url: "/graphics/snack/fruit/watermelon.jpg",
			locations: [LOCATIONS.home],
			name: "Watermelon",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.fruit));
