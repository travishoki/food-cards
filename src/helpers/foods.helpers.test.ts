import { buildFood } from "./foods.helpers";
import { CATEGORIES } from "../const/categories";
import { LOCATIONS } from "../const/locations.const";

describe("buildFood", () => {
	describe("string input", () => {
		it("treats a string as the food's name", () => {
			const food = buildFood(CATEGORIES.dairy, 1)("Gogurt", 0);
			expect(food.name).toBe("Gogurt");
		});

		it("derives a slug from the name", () => {
			const food = buildFood(CATEGORIES.dairy, 1)("Grated Cheese", 0);
			expect(food.slug).toBe("grated-cheese");
		});
	});

	describe("object input", () => {
		it("preserves explicit fields", () => {
			const food = buildFood(CATEGORIES.dairy, 1)(
				{
					name: "String Cheese",
					prerelease: true,
				},
				0,
			);
			expect(food.name).toBe("String Cheese");
			expect(food.prerelease).toBe(true);
		});

		it("respects an explicit slug override", () => {
			const food = buildFood(CATEGORIES.dairy, 1)(
				{
					name: "Anything",
					slug: "custom-slug",
				},
				0,
			);
			expect(food.slug).toBe("custom-slug");
		});

		it("respects an explicit image_url override", () => {
			const food = buildFood(CATEGORIES.dairy, 1)(
				{
					image_url: "/custom.jpg",
					name: "Anything",
				},
				0,
			);
			expect(food.image_url).toBe("/custom.jpg");
		});
	});

	describe("defaults", () => {
		it("defaults difficulty to 1", () => {
			const food = buildFood(CATEGORIES.dairy, 1)("Gogurt", 0);
			expect(food.difficulty).toBe(1);
		});

		it("defaults locations to [home]", () => {
			const food = buildFood(CATEGORIES.dairy, 1)("Gogurt", 0);
			expect(food.locations).toEqual([LOCATIONS.home]);
		});

		it("attaches the category_key", () => {
			const food = buildFood(CATEGORIES.dairy, 1)("Gogurt", 0);
			expect(food.category_key).toBe(CATEGORIES.dairy);
		});
	});

	describe("image_url derivation", () => {
		it("uses /graphics/{top}/{sub}/{slug}.jpg from the slug", () => {
			const food = buildFood(CATEGORIES.dairy, 1)("Grated Cheese", 0);
			expect(food.image_url).toBe(
				"/graphics/snack/dairy/grated-cheese.jpg",
			);
		});

		it("uses the correct top category for entree", () => {
			const food = buildFood(CATEGORIES.entree, 1)("Pizza", 0);
			expect(food.image_url).toBe("/graphics/main/entree/pizza.jpg");
		});

		it("uses the correct top category for candy", () => {
			const food = buildFood(CATEGORIES.candy, 1)("Skittles", 0);
			expect(food.image_url).toBe("/graphics/sweets/candy/skittles.jpg");
		});
	});

	describe("position", () => {
		it("uses the index argument", () => {
			const build = buildFood(CATEGORIES.dairy, 5);
			expect(build("A", 0).position.index).toBe(0);
			expect(build("B", 2).position.index).toBe(2);
			expect(build("C", 4).position.index).toBe(4);
		});

		it("uses the total argument", () => {
			const food = buildFood(CATEGORIES.dairy, 19)("Gogurt", 3);
			expect(food.position.total).toBe(19);
		});
	});

	describe("integration with .map", () => {
		it("attaches sequential indices and the array length", () => {
			const items = ["Apple", "Banana", "Carrot"];
			const foods = items.map(buildFood(CATEGORIES.fruit, items.length));
			expect(foods.map((f) => f.position)).toEqual([
				{ index: 0, total: 3 },
				{ index: 1, total: 3 },
				{ index: 2, total: 3 },
			]);
		});
	});
});
