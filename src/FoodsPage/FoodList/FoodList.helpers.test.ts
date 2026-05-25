import { getVisibleFoods } from "./FoodList.helpers";
import { FOODS } from "../../data";

jest.mock("../../data", () => ({
	FOODS: [
		{
			category_key: "fruit",
			difficulty: 1,
			image_url: "",
			inStock: false,
			name: "Apple",
		},
		{
			category_key: "fruit",
			difficulty: 2,
			image_url: "",
			inStock: true,
			name: "Banana",
		},
		{
			category_key: "vegetables",
			difficulty: 1,
			image_url: "",
			name: "Carrot",
		},
		{
			category_key: "dessert",
			difficulty: 3,
			image_url: "",
			name: "Donut",
		},
		{
			category_key: "breakfast",
			difficulty: 4,
			image_url: "",
			name: "Eggs",
		},
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

	describe("sort", () => {
		it("defaults to ascending alphabetical order", () => {
			expect(getVisibleFoods({ search: "" }).map((f) => f.name)).toEqual([
				"Apple",
				"Banana",
				"Carrot",
				"Donut",
				"Eggs",
			]);
		});

		it("sorts descending by name when sort is 'desc'", () => {
			expect(
				getVisibleFoods({ search: "", sort: "desc" }).map(
					(f) => f.name,
				),
			).toEqual(["Eggs", "Donut", "Carrot", "Banana", "Apple"]);
		});

		it("applies sort after filtering", () => {
			expect(
				getVisibleFoods({
					search: "",
					sort: "desc",
					topCategory: "snack",
				}).map((f) => f.name),
			).toEqual(["Carrot", "Banana", "Apple"]);
		});

		it("applies sort after search", () => {
			expect(
				getVisibleFoods({ search: "a", sort: "desc" }).map(
					(f) => f.name,
				),
			).toEqual(["Carrot", "Banana", "Apple"]);
		});

		it("sorts ascending by difficulty when sort is 'difficulty-asc'", () => {
			// Difficulties: Apple=1, Banana=2, Carrot=1, Donut=3, Eggs=4
			expect(
				getVisibleFoods({ search: "", sort: "difficulty-asc" }).map(
					(f) => f.name,
				),
			).toEqual(["Apple", "Carrot", "Banana", "Donut", "Eggs"]);
		});

		it("breaks difficulty ties alphabetically", () => {
			// Apple and Carrot both have difficulty 1 → alpha order.
			const names = getVisibleFoods({
				search: "",
				sort: "difficulty-asc",
			}).map((f) => f.name);
			expect(names.slice(0, 2)).toEqual(["Apple", "Carrot"]);
		});
	});

	describe("inStockMode filtering", () => {
		it("defaults to 'show', returning all foods regardless of inStock", () => {
			expect(getVisibleFoods({ search: "" })).toHaveLength(5);
		});

		it("'show' includes items with inStock: false", () => {
			const names = getVisibleFoods({
				inStockMode: "show",
				search: "",
			}).map((f) => f.name);
			expect(names).toContain("Apple");
		});

		it("'show' includes items with inStock: true", () => {
			const names = getVisibleFoods({
				inStockMode: "show",
				search: "",
			}).map((f) => f.name);
			expect(names).toContain("Banana");
		});

		it("'show' includes items with no inStock property set", () => {
			const names = getVisibleFoods({
				inStockMode: "show",
				search: "",
			}).map((f) => f.name);
			expect(names).toContain("Carrot");
		});

		it("'hide' excludes items with inStock: false", () => {
			const names = getVisibleFoods({
				inStockMode: "hide",
				search: "",
			}).map((f) => f.name);
			expect(names).not.toContain("Apple");
		});

		it("'hide' keeps items with inStock: true", () => {
			const names = getVisibleFoods({
				inStockMode: "hide",
				search: "",
			}).map((f) => f.name);
			expect(names).toContain("Banana");
		});

		it("'hide' keeps items with no inStock property set", () => {
			const names = getVisibleFoods({
				inStockMode: "hide",
				search: "",
			}).map((f) => f.name);
			expect(names).toContain("Carrot");
		});

		it("'only' returns only items with inStock: false", () => {
			expect(
				getVisibleFoods({ inStockMode: "only", search: "" }).map(
					(f) => f.name,
				),
			).toEqual(["Apple"]);
		});

		it("'only' excludes items with inStock: true", () => {
			const names = getVisibleFoods({
				inStockMode: "only",
				search: "",
			}).map((f) => f.name);
			expect(names).not.toContain("Banana");
		});

		it("'only' excludes items with no inStock property set", () => {
			const names = getVisibleFoods({
				inStockMode: "only",
				search: "",
			}).map((f) => f.name);
			expect(names).not.toContain("Carrot");
		});

		it("'hide' combines with search", () => {
			// Apple (inStock: false) matches "a" but should be excluded
			// Banana (inStock: true) matches "a" and should be kept
			// Carrot matches "a" (no inStock set) and should be kept
			expect(
				getVisibleFoods({
					inStockMode: "hide",
					search: "a",
				}).map((f) => f.name),
			).toEqual(["Banana", "Carrot"]);
		});

		it("'only' combines with search", () => {
			expect(
				getVisibleFoods({
					inStockMode: "only",
					search: "app",
				}).map((f) => f.name),
			).toEqual(["Apple"]);
		});

		it("'only' returns empty when no out-of-stock items match the search", () => {
			expect(
				getVisibleFoods({ inStockMode: "only", search: "xyz" }),
			).toEqual([]);
		});

		it("'hide' combines with subCategory", () => {
			// Fruit has Apple (inStock: false) and Banana (inStock: true)
			expect(
				getVisibleFoods({
					inStockMode: "hide",
					search: "",
					subCategory: "fruit",
				}).map((f) => f.name),
			).toEqual(["Banana"]);
		});

		it("'only' combines with subCategory", () => {
			expect(
				getVisibleFoods({
					inStockMode: "only",
					search: "",
					subCategory: "fruit",
				}).map((f) => f.name),
			).toEqual(["Apple"]);
		});
	});

	describe("difficulty filtering", () => {
		it("filters to foods matching difficulty 1", () => {
			expect(
				getVisibleFoods({ difficulty: 1, search: "" }).map(
					(f) => f.name,
				),
			).toEqual(["Apple", "Carrot"]);
		});

		it("filters to foods matching difficulty 2", () => {
			expect(
				getVisibleFoods({ difficulty: 2, search: "" }).map(
					(f) => f.name,
				),
			).toEqual(["Banana"]);
		});

		it("excludes foods without a difficulty value", () => {
			const names = getVisibleFoods({ difficulty: 1, search: "" }).map(
				(f) => f.name,
			);
			expect(names).not.toContain("Eggs");
		});

		it("combines with topCategory", () => {
			expect(
				getVisibleFoods({
					difficulty: 1,
					search: "",
					topCategory: "snack",
				}).map((f) => f.name),
			).toEqual(["Apple", "Carrot"]);
		});

		it("null difficulty applies no filter", () => {
			expect(
				getVisibleFoods({ difficulty: null, search: "" }),
			).toHaveLength(5);
		});
	});
});

// suppress unused warning for EGGS (it exists in FOODS to test that
// unrelated foods don't leak into category filters)
void EGGS;
