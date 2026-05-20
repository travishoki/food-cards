import { CATEGORIES } from "./categories";
import { LOCATIONS } from "./locations.const";

import type { Food } from "../types";

export const DESSERT_FOODS: Food[] = [
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/glazed-donut.jpg",
		locations: [LOCATIONS.home],
		name: "Donut",
		slug: "donut",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/apple-pie.jpg",
		locations: [LOCATIONS.home],
		name: "Apple Pie",
		slug: "apple-pie",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/brownies.jpg",
		locations: [LOCATIONS.home],
		name: "Brownies",
		slug: "brownies",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/chocolate-pie.jpg",
		locations: [LOCATIONS.home],
		name: "Chocolate Pie",
		slug: "chocolate-pie",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/cinnamon-roll.jpg",
		locations: [LOCATIONS.home],
		name: "Cinnamon Roll",
		slug: "cinnamon-roll",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/cookie.jpg",
		locations: [LOCATIONS.home],
		name: "Cookie",
		slug: "cookie",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/cookie-dough.jpg",
		locations: [LOCATIONS.home],
		name: "Cookie Dough",
		slug: "cookie-dough",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/cookie-dough-pizza.jpg",
		locations: [LOCATIONS.home],
		name: "Cookie Dough Pizza",
		slug: "cookie-dough-pizza",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/cupcake.jpg",
		locations: [LOCATIONS.home],
		name: "Cupcake",
		slug: "cupcake",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/frosty.jpg",
		locations: [
			/* unknown: LOCATIONS.restaurant */
		],
		name: "Frosty",
		slug: "frosty",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/fruit-pizza.jpg",
		locations: [LOCATIONS.home],
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
		locations: [LOCATIONS.home],
		name: "Ice Cream",
		slug: "ice-cream",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/mint-brownies.jpg",
		locations: [LOCATIONS.home],
		name: "Mint Brownies",
		slug: "mint-brownies",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/peach-cobbler.jpg",
		locations: [LOCATIONS.home],
		name: "Peach Cobbler",
		slug: "peach-cobbler",
	},
	{
		difficulty: 1,
		image_url: "/graphics/sweets/dessert/peanut-butter-bars.jpg",
		locations: [LOCATIONS.home],
		name: "Peanut Butter Bars",
		slug: "peanut-butter-bars",
	},
	{
		difficulty: 1,
		image_url:
			"http://thesquishymonster.com/2017/05/butter-mochi-cake.html",
		locations: [LOCATIONS.home],
		name: "Mochi Cake",
		slug: "mocki-cake",
	},
].map((f) => ({ ...f, category_key: CATEGORIES.dessert })) as Food[];
