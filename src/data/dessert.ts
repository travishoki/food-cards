import { CATEGORIES } from "./categories";

import type { Food } from "../types";

export const DESSERT_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/glazed-donut.jpg",
		name: "Donut",
		slug: "donut",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/apple-pie.jpg",
		name: "Apple Pie",
		slug: "apple-pie",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/brownies.jpg",
		name: "Brownies",
		slug: "brownies",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/chocolate-pie.jpg",
		name: "Chocolate Pie",
		slug: "chocolate-pie",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/cinnamon-roll.jpg",
		name: "Cinnamon Roll",
		slug: "cinnamon-roll",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/cookie.jpg",
		name: "Cookie",
		slug: "cookie",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/cookie-dough.jpg",
		name: "Cookie Dough",
		slug: "cookie-dough",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/cookie-dough-pizza.jpg",
		name: "Cookie Dough Pizza",
		slug: "cookie-dough-pizza",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/cupcake.jpg",
		name: "Cupcake",
		slug: "cupcake",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/frosty.jpg",
		name: "Frosty",
		slug: "frosty",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/fruit-pizza.jpg",
		location: "home",
		name: "Fruit Pizza",
		slug: "fruit-pizza",
		toppings: [
			"Bananas",
			"Black Berries",
			"Blue Berries",
			"Mandarine Oranges",
			"Kiwis",
			"Rasperries",
			"Strawberries",
		],
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/ice-cream.jpg",
		name: "Ice Cream",
		slug: "ice-cream",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/mint-brownies.jpg",
		name: "Mint Brownies",
		slug: "mint-brownies",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/peach-cobbler.jpg",
		name: "Peach Cobbler",
		slug: "peach-cobbler",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/peanut-butter-bars.jpg",
		name: "Peanut Butter Bars",
		slug: "peanut-butter-bars",
	},
	{
		difficulty: 1,
		image_url:
			"http://thesquishymonster.com/2017/05/butter-mochi-cake.html",
		name: "Mochi Cake",
		slug: "mocki-cake",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.dessert })) as Food[];
