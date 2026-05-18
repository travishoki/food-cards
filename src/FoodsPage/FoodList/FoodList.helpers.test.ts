import { getVisibleFoods } from "./FoodList.helpers";
import { FOODS } from "../../data";

jest.mock("../../data", () => ({
	FOODS: [
		{ category_key: "fruit", id: 1, image_url: "", name: "Apple" },
		{ category_key: "fruit", id: 2, image_url: "", name: "Banana" },
		{ category_key: "vegetables", id: 3, image_url: "", name: "Carrot" },
		{ category_key: "dessert", id: 4, image_url: "", name: "Donut" },
		{ category_key: "breakfast", id: 5, image_url: "", name: "Eggs" },
	],
}));

const [APPLE, BANANA, CARROT, DONUT, EGGS] = FOODS;

describe("getVisibleFoods", () => {
	describe("with no filters", () => {
		it("returns all foods", () => {
			expect(getVisibleFoods({ search: "" })).toEqual(FOODS);
		});
	});

	describe("topCategory filtering", () => {
		it("filters to subcategories of the top category", () => {
			expect(
				getVisibleFoods({ search: "", topCategory: "snack" }),
			).toEqual([APPLE, BANANA, CARROT]);
		});

		it("returns all foods for an unknown topCategory", () => {
			expect(
				getVisibleFoods({ search: "", topCategory: "bogus" }),
			).toEqual(FOODS);
		});

		it("filters to a single subcategory's foods for 'sweets'", () => {
			expect(
				getVisibleFoods({ search: "", topCategory: "sweets" }),
			).toEqual([DONUT]);
		});
	});

	describe("subCategory filtering", () => {
		it("filters to foods matching the subcategory", () => {
			expect(
				getVisibleFoods({ search: "", subCategory: "fruit" }),
			).toEqual([APPLE, BANANA]);
		});

		it("returns empty array for unknown subcategory", () => {
			expect(
				getVisibleFoods({ search: "", subCategory: "bogus" }),
			).toEqual([]);
		});

		it("subCategory takes precedence when both are provided", () => {
			expect(
				getVisibleFoods({
					search: "",
					subCategory: "fruit",
					topCategory: "sweets",
				}),
			).toEqual([APPLE, BANANA]);
		});
	});

	describe("search filtering", () => {
		it("filters by name substring (case-insensitive)", () => {
			expect(getVisibleFoods({ search: "AN" })).toEqual([BANANA]);
		});

		it("trims whitespace from the query", () => {
			expect(getVisibleFoods({ search: "   apple   " })).toEqual([APPLE]);
		});

		it("returns all foods for an empty query", () => {
			expect(getVisibleFoods({ search: "" })).toEqual(FOODS);
		});

		it("returns all foods for a whitespace-only query", () => {
			expect(getVisibleFoods({ search: "   " })).toEqual(FOODS);
		});

		it("returns empty array when nothing matches", () => {
			expect(getVisibleFoods({ search: "xyz" })).toEqual([]);
		});
	});

	describe("combined filters", () => {
		it("applies category filter then search", () => {
			expect(
				getVisibleFoods({ search: "a", topCategory: "snack" }),
			).toEqual([APPLE, BANANA, CARROT]);
		});

		it("applies subCategory then search", () => {
			expect(
				getVisibleFoods({ search: "ban", subCategory: "fruit" }),
			).toEqual([BANANA]);
		});
	});
});

// suppress unused warning for EGGS (it exists in FOODS to test that
// unrelated foods don't leak into category filters)
void EGGS;
