import { CATEGORIES } from "./categories";

import type { Food } from "../types";

export const DRINKS_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/milk.jpg",
		location: "home",
		name: "Milk",
		slug: "milk",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/chocolate-milk.jpg",
		location: "home",
		name: "Chocolate Milk",
		slug: "chocolate-milk",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/frazzle.jpg",
		instructions: "Worth the trip to a gas station.",
		location: "home",
		name: "Frazzle",
		slug: "frazzle",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/gatorade.jpg",
		instructions:
			"Important to get electrolites when excercising and paying hard.",
		location: "home",
		name: "Gatorade",
		slug: "gatorade",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/hot-chocolate.jpg",
		location: "home",
		name: "Hot Chocolate",
		slug: "hot-chocolate",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/kool-aid.jpg",
		location: "home",
		name: "Kool-Aid",
		slug: "kool-aid",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/lemonade.jpg",
		location: "home",
		name: "Lemonade",
		slug: "lemonade",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/orange-julius.jpg",
		location: "home",
		name: "Orange Julius",
		slug: "orange-julius",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/powerade.jpg",
		instructions:
			"Important to get electrolites when excercising and paying hard.",
		location: "home",
		name: "Powerade",
		slug: "powerade",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/root-beer.jpg",
		instructions:
			"Great Grandpa Grovers favorite drinks! It will fix all that ails you!",
		location: "home",
		name: "Root Beer",
		slug: "root-beer",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/slurpee.jpg",
		instructions: "Worth the trip to a gas station.",
		location: "home",
		name: "Slurpee",
		slug: "slurpee",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/sprite.jpg",
		location: "home",
		name: "Sprite",
		slug: "sprite",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/sunny-d.jpg",
		location: "home",
		name: "Sunny D",
		slug: "sunny-d",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.drinks })) as Food[];
