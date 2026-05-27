import { buildFood } from "./foods.helpers";
import { CATEGORIES } from "../const/categories";
import { LOCATIONS } from "../const/locations.const";

describe("buildFood", () => {
	describe("string input", () => {
		it("treats a string as the food's name", () => {
			const food = buildFood(CATEGORIES.dairy)("Gogurt");
			expect(food.name).toBe("Gogurt");
		});

		it("derives a slug from the name", () => {
			const food = buildFood(CATEGORIES.dairy)("Grated Cheese");
			expect(food.slug).toBe("grated-cheese");
		});
	});

	describe("object input", () => {
		it("preserves explicit fields", () => {
			const food = buildFood(CATEGORIES.dairy)({
				name: "String Cheese",
				prerelease: true,
			});
			expect(food.name).toBe("String Cheese");
			expect(food.prerelease).toBe(true);
		});

		it("respects an explicit slug override", () => {
			const food = buildFood(CATEGORIES.dairy)({
				name: "Anything",
				slug: "custom-slug",
			});
			expect(food.slug).toBe("custom-slug");
		});

		it("respects an explicit image_url override", () => {
			const food = buildFood(CATEGORIES.dairy)({
				image_url: "/custom.jpg",
				name: "Anything",
			});
			expect(food.image_url).toBe("/custom.jpg");
		});
	});

	describe("defaults", () => {
		it("defaults difficulty to 1", () => {
			const food = buildFood(CATEGORIES.dairy)("Gogurt");
			expect(food.difficulty).toBe(1);
		});

		it("defaults locations to [home]", () => {
			const food = buildFood(CATEGORIES.dairy)("Gogurt");
			expect(food.locations).toEqual(LOCATIONS.home);
		});

		it("attaches the category_key", () => {
			const food = buildFood(CATEGORIES.dairy)("Gogurt");
			expect(food.category_key).toBe(CATEGORIES.dairy);
		});
	});

	describe("image_url derivation", () => {
		it("uses /graphics/{top}/{sub}/{slug}.jpg from the slug", () => {
			const food = buildFood(CATEGORIES.dairy)("Grated Cheese");
			expect(food.image_url).toBe(
				"/graphics/snack/dairy/grated-cheese.jpg",
			);
		});

		it("uses the correct top category for entree", () => {
			const food = buildFood(CATEGORIES.entree)("Pizza");
			expect(food.image_url).toBe("/graphics/main/entree/pizza.jpg");
		});

		it("uses the correct top category for candy", () => {
			const food = buildFood(CATEGORIES.candy)("Skittles");
			expect(food.image_url).toBe("/graphics/sweets/candy/skittles.jpg");
		});
	});

	describe("integration with .map", () => {
		it("maps a list of strings to food items", () => {
			const items = ["Apple", "Banana", "Carrot"];
			const foods = items.map(buildFood(CATEGORIES.fruit));
			expect(foods.map((f) => f.name)).toEqual([
				"Apple",
				"Banana",
				"Carrot",
			]);
		});
	});
});
