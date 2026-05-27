import { FOODS } from "./index";
import {
	TOP_CATEGORY_SUBCATEGORIES,
	TOP_CATEGORIES,
} from "../const/categories";
import { LOCATIONS } from "../const/locations.const";

import type { Food } from "../types";

const SNACK_CATEGORY_KEYS = new Set(
	TOP_CATEGORY_SUBCATEGORIES[TOP_CATEGORIES.snack],
);

const hasHomeLocation = (food: Food): boolean =>
	[food.locations].flat().includes(LOCATIONS.home);

describe("FOODS data validation", () => {
	describe("difficulty", () => {
		it('only "Home" foods have a "difficulty"', () => {
			for (const food of FOODS) {
				if (!hasHomeLocation(food)) {
					expect(food.difficulty).toBe(1);
				}
			}
		});
	});

	describe("Categories", () => {
		it('"Snack" foods category is only at "Home"', () => {
			for (const food of FOODS) {
				if (SNACK_CATEGORY_KEYS.has(food.category_key)) {
					expect(hasHomeLocation(food)).toBe(true);
				}
			}
		});
	});
});
