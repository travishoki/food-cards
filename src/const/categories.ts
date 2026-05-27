export const TOP_CATEGORIES = {
	drinks: "drinks",
	main: "main",
	sides: "sides",
	snack: "snack",
	sweets: "sweets",
} as const;

export type TopCategoryKey = keyof typeof TOP_CATEGORIES;

export const TOP_CATEGORY_ORDER: TopCategoryKey[] = [
	"main",
	"sides",
	"snack",
	"drinks",
	"sweets",
];

export const TOP_CATEGORY_DATA: Record<TopCategoryKey, { label: string }> = {
	drinks: { label: "Drinks" },
	main: { label: "Main" },
	sides: { label: "Sides" },
	snack: { label: "Snack" },
	sweets: { label: "Sweets" },
};

export const CATEGORIES = {
	breakfast: "breakfast",
	candy: "candy",
	dairy: "dairy",
	dessert: "dessert",
	drinks: "drinks",
	entree: "entree",
	fruit: "fruit",
	grains: "grains",
	protein: "protein",
	sides: "sides",
	vegetables: "vegetables",
};

export const TOP_CATEGORY_SUBCATEGORIES: Record<TopCategoryKey, string[]> = {
	drinks: [CATEGORIES.drinks],
	main: [CATEGORIES.breakfast, CATEGORIES.entree],
	sides: [CATEGORIES.sides],
	snack: [
		CATEGORIES.dairy,
		CATEGORIES.fruit,
		CATEGORIES.grains,
		CATEGORIES.protein,
		CATEGORIES.vegetables,
	],
	sweets: [CATEGORIES.candy, CATEGORIES.dessert],
};

export const CATEGORY_DATA: Record<string, { label: string }> = {
	[CATEGORIES.breakfast]: { label: "Breakfast" },
	[CATEGORIES.candy]: { label: "Candy" },
	[CATEGORIES.dairy]: { label: "Dairy" },
	[CATEGORIES.dessert]: { label: "Dessert" },
	[CATEGORIES.drinks]: { label: "Drinks" },
	[CATEGORIES.entree]: { label: "Lunch/Dinner" },
	[CATEGORIES.fruit]: { label: "Fruit" },
	[CATEGORIES.grains]: { label: "Grain/Bread" },
	[CATEGORIES.protein]: { label: "Protein" },
	[CATEGORIES.sides]: { label: "Sides" },
	[CATEGORIES.vegetables]: { label: "Vegetables" },
};
