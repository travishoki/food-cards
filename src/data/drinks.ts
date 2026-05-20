import { CATEGORIES } from "./categories";

import type { Food } from "../types";

export const DRINKS_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/milk.jpg",
		locations: ["home"],
		name: "Milk",
		slug: "milk",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/chocolate-milk.jpg",
		locations: ["home"],
		name: "Chocolate Milk",
		slug: "chocolate-milk",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/frazzle.jpg",
		instructions: "Worth the trip to a gas station.",
		locations: ["home"],
		name: "Frazzle",
		slug: "frazzle",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/gatorade.jpg",
		instructions:
			"Important to get electrolites when excercising and paying hard.",
		locations: ["home"],
		name: "Gatorade",
		slug: "gatorade",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/hot-chocolate.jpg",
		locations: ["home"],
		name: "Hot Chocolate",
		slug: "hot-chocolate",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/kool-aid.jpg",
		locations: ["home"],
		name: "Kool-Aid",
		slug: "kool-aid",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/lemonade.jpg",
		locations: ["home"],
		name: "Lemonade",
		slug: "lemonade",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/orange-julius.jpg",
		locations: ["home"],
		name: "Orange Julius",
		slug: "orange-julius",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/powerade.jpg",
		instructions:
			"Important to get electrolites when excercising and paying hard.",
		locations: ["home"],
		name: "Powerade",
		slug: "powerade",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/root-beer.jpg",
		instructions:
			"Great Grandpa Grovers favorite drinks! It will fix all that ails you!",
		locations: ["home"],
		name: "Root Beer",
		slug: "root-beer",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/slurpee.jpg",
		instructions: "Worth the trip to a gas station.",
		locations: ["home"],
		name: "Slurpee",
		slug: "slurpee",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/sprite.jpg",
		locations: ["home"],
		name: "Sprite",
		slug: "sprite",
	},
	{
		difficulty: 1,
		image_url: "/graphics/drinks/drinks/sunny-d.jpg",
		locations: ["home"],
		name: "Sunny D",
		slug: "sunny-d",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.drinks })) as Food[];
