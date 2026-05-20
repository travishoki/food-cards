import { CATEGORIES } from "./categories";

import type { Food } from "../types";

export const DRINKS_FOODS: Food[] = [
	{
		difficulty: 1,
		id: 4,
		image_url: "/graphics/drinks/drinks/milk.jpg",
		name: "Milk",
		slug: "milk",
	},
	{
		difficulty: 1,
		id: 8,
		image_url: "/graphics/drinks/drinks/chocolate-milk.jpg",
		name: "Chocolate Milk",
		slug: "chocolate-milk",
	},
	{
		difficulty: 1,
		id: 86,
		image_url: "/graphics/drinks/drinks/frazzle.jpg",
		instructions: "Worth the trip to a gas station.",
		name: "Frazzle",
		slug: "frazzle",
	},
	{
		difficulty: 1,
		id: 87,
		image_url: "/graphics/drinks/drinks/gatorade.jpg",
		instructions:
			"Important to get electrolites when excercising and paying hard.",
		name: "Gatorade",
		slug: "gatorade",
	},
	{
		difficulty: 1,
		id: 88,
		image_url: "/graphics/drinks/drinks/hot-chocolate.jpg",
		name: "Hot Chocolate",
		slug: "hot-chocolate",
	},
	{
		difficulty: 1,
		id: 89,
		image_url: "/graphics/drinks/drinks/kool-aid.jpg",
		name: "Kool-Aid",
		slug: "kool-aid",
	},
	{
		difficulty: 1,
		id: 90,
		image_url: "/graphics/drinks/drinks/lemonade.jpg",
		name: "Lemonade",
		slug: "lemonade",
	},
	{
		difficulty: 1,
		id: 91,
		image_url: "/graphics/drinks/drinks/orange-julius.jpg",
		name: "Orange Julius",
		slug: "orange-julius",
	},
	{
		difficulty: 1,
		id: 92,
		image_url: "/graphics/drinks/drinks/powerade.jpg",
		instructions:
			"Important to get electrolites when excercising and paying hard.",
		name: "Powerade",
		slug: "powerade",
	},
	{
		difficulty: 1,
		id: 93,
		image_url: "/graphics/drinks/drinks/root-beer.jpg",
		instructions:
			"Great Grandpa Grovers favorite drinks! It will fix all that ails you!",
		name: "Root Beer",
		slug: "root-beer",
	},
	{
		difficulty: 1,
		id: 94,
		image_url: "/graphics/drinks/drinks/slurpee.jpg",
		instructions: "Worth the trip to a gas station.",
		name: "Slurpee",
		slug: "slurpee",
	},
	{
		difficulty: 1,
		id: 95,
		image_url: "/graphics/drinks/drinks/sprite.jpg",
		name: "Sprite",
		slug: "sprite",
	},
	{
		difficulty: 1,
		id: 96,
		image_url: "/graphics/drinks/drinks/sunny-d.jpg",
		name: "Sunny D",
		slug: "sunny-d",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.drinks })) as Food[];
