import { CATEGORIES } from "./categories";
import { buildFood, FoodInput } from "./foods.helpers";
import { LOCATIONS } from "./locations.const";

export const DRINKS_FOODS = (
	[
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/milk.jpg",
			locations: [LOCATIONS.home],
			name: "Milk",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/chocolate-milk.jpg",
			locations: [LOCATIONS.home],
			name: "Chocolate Milk",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/frazzle.jpg",
			instructions: "Worth the trip to a gas station.",
			locations: [LOCATIONS["fast-food"]],
			name: "Frazzle",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/gatorade.jpg",
			instructions:
				"Important to get electrolites when excercising and paying hard.",
			locations: [LOCATIONS.home],
			name: "Gatorade",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/hot-chocolate.jpg",
			locations: [LOCATIONS.home],
			name: "Hot Chocolate",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/kool-aid.jpg",
			locations: [LOCATIONS.home],
			name: "Kool-Aid",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/lemonade.jpg",
			locations: [LOCATIONS.home],
			name: "Lemonade",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/orange-julius.jpg",
			locations: [LOCATIONS.home],
			name: "Orange Julius",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/powerade.jpg",
			instructions:
				"Important to get electrolites when excercising and paying hard.",
			locations: [LOCATIONS.home],
			name: "Powerade",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/root-beer.jpg",
			instructions:
				"Great Grandpa Grovers favorite drinks! It will fix all that ails you!",
			locations: [LOCATIONS.home],
			name: "Root Beer",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/slurpee.jpg",
			instructions: "Worth the trip to a gas station.",
			locations: [LOCATIONS["fast-food"]],
			name: "Slurpee",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/sprite.jpg",
			locations: [LOCATIONS.home],
			name: "Sprite",
		},
		{
			difficulty: 1,
			image_url: "/graphics/drinks/drinks/sunny-d.jpg",
			locations: [LOCATIONS.home],
			name: "Sunny D",
		},
	] as FoodInput[]
).map(buildFood(CATEGORIES.drinks));
