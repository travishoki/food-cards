import {
	getEditDistance,
	getFoodSearchScore,
	getFoodSearchSuggestions,
	getFoodSearchText,
	getSearchTokens,
	getTokenScore,
	getVisibleFoods,
	normalizeSearchText,
} from "./FoodList.helpers";
import { FOODS } from "../../data";

jest.mock("../../data", () => ({
	FOODS: [
		{
			category_key: "fruit",
			difficulty: 1,
			image_url: "",
			inStock: false,
			ingredients: ["cinnamon"],
			name: "Apple",
			slug: "apple",
		},
		{
			category_key: "fruit",
			difficulty: 2,
			image_url: "",
			inStock: true,
			name: "Banana",
			slug: "banana",
			toppings: ["peanut butter"],
		},
		{
			category_key: "vegetables",
			difficulty: 1,
			image_url: "",
			info: "Crunchy orange snack",
			name: "Carrot",
			slug: "carrot",
		},
		{
			category_key: "dessert",
			difficulty: 3,
			image_url: "",
			name: "Donut",
			slug: "donut",
		},
		{
			category_key: "breakfast",
			difficulty: 4,
			image_url: "",
			ingredients: ["egg"],
			name: "Eggs",
			slug: "eggs",
		},
	],
}));

const [APPLE, BANANA, CARROT, DONUT, EGGS] = FOODS;

describe("normalizeSearchText", () => {
	it("lowercases, trims, removes punctuation, and normalizes spaces", () => {
		expect(normalizeSearchText("  Peanut-Butter!!!  ")).toBe(
			"peanut butter",
		);
	});

	it("removes accent marks", () => {
		expect(normalizeSearchText("Crème Brûlée")).toBe("creme brulee");
	});
});

describe("getSearchTokens", () => {
	it("returns searchable words from a query", () => {
		expect(getSearchTokens("  Peanut   Butter  ")).toEqual([
			"peanut",
			"butter",
		]);
	});

	it("returns no tokens for blank search", () => {
		expect(getSearchTokens("   ")).toEqual([]);
	});
});

describe("getFoodSearchText", () => {
	it("combines the food fields that search should know about", () => {
		expect(getFoodSearchText(BANANA)).toContain("Banana");
		expect(getFoodSearchText(BANANA)).toContain("fruit");
		expect(getFoodSearchText(BANANA)).toContain("peanut butter");
	});

	it("skips missing optional arrays without adding undefined text", () => {
		expect(getFoodSearchText(DONUT)).not.toContain("undefined");
	});
});

describe("getEditDistance", () => {
	it("returns 0 for identical words", () => {
		expect(getEditDistance("apple", "apple")).toBe(0);
	});

	it("counts one-character edits", () => {
		expect(getEditDistance("appel", "apple")).toBe(2);
	});

	it("counts inserting all letters when one side is empty", () => {
		expect(getEditDistance("", "apple")).toBe(5);
	});
});

describe("getTokenScore", () => {
	it("scores exact matches highest", () => {
		expect(getTokenScore("apple", "apple")).toBe(120);
	});

	it("scores prefix matches below exact matches", () => {
		expect(getTokenScore("app", "apple")).toBe(90);
	});

	it("scores contains matches below prefix matches", () => {
		expect(getTokenScore("nan", "banana")).toBe(70);
	});

	it("does not fuzzy match very short queries", () => {
		expect(getTokenScore("ap", "at")).toBe(0);
	});

	it("scores typo matches below substring matches", () => {
		expect(getTokenScore("appel", "apple")).toBe(48);
	});

	it("returns 0 when the typo is too far away", () => {
		expect(getTokenScore("cinnamon", "apple")).toBe(0);
	});
});

describe("getFoodSearchScore", () => {
	it("returns a positive score when any searchable field matches", () => {
		expect(getFoodSearchScore(BANANA, "peanut butter")).toBeGreaterThan(0);
	});

	it("requires every query token to match somewhere", () => {
		expect(getFoodSearchScore(BANANA, "peanut carrot")).toBe(0);
	});

	it("keeps 1-2 letter searches scoped to the food name", () => {
		expect(getFoodSearchScore(BANANA, "p")).toBe(0);
	});

	it("adds a small boost when the phrase appears in the food name", () => {
		expect(getFoodSearchScore(BANANA, "banana")).toBe(150);
	});
});

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

		it("matches ingredients", () => {
			expect(getVisibleFoods({ search: "cinnamon" })).toEqual([APPLE]);
		});

		it("matches toppings", () => {
			expect(getVisibleFoods({ search: "peanut butter" })).toEqual([
				BANANA,
			]);
		});

		it("matches category keys", () => {
			expect(getVisibleFoods({ search: "breakfast" })).toEqual([EGGS]);
		});

		it("matches small typos in food names", () => {
			expect(getVisibleFoods({ search: "appel" })).toEqual([APPLE]);
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

describe("getFoodSearchSuggestions", () => {
	it("returns nearby local foods for a search", () => {
		expect(getFoodSearchSuggestions("appel")).toEqual([
			{ name: "Apple", slug: "apple" },
		]);
	});

	it("limits suggestions", () => {
		expect(getFoodSearchSuggestions("a", 2)).toHaveLength(2);
	});

	it("returns no suggestions for blank search", () => {
		expect(getFoodSearchSuggestions("   ")).toEqual([]);
	});
});

// suppress unused warning for EGGS (it exists in FOODS to test that
// unrelated foods don't leak into category filters)
void EGGS;
