import { foodBySlug, fromFoodSlug, toFoodSlug } from "./slug.helpers";

describe("foodBySlug", () => {
	const foods = [
		{ name: "Donut", slug: "donut" },
		{ name: "Andes Mints", slug: "andes-mints" },
		{ name: "Chocolate Milk", slug: "chocolate-milk" },
		{ name: "Sugar & Salt", slug: "sugar-and-salt" },
	];

	it("finds a food by its slug", () => {
		expect(foodBySlug(foods, "donut")).toEqual({
			name: "Donut",
			slug: "donut",
		});
	});

	it("finds a food with a multi-word slug", () => {
		expect(foodBySlug(foods, "andes-mints")).toEqual({
			name: "Andes Mints",
			slug: "andes-mints",
		});
	});

	it("finds a food whose name contains &", () => {
		expect(foodBySlug(foods, "sugar-and-salt")).toEqual({
			name: "Sugar & Salt",
			slug: "sugar-and-salt",
		});
	});

	it("returns undefined for an unknown slug", () => {
		expect(foodBySlug(foods, "unknown")).toBeUndefined();
	});

	it("returns undefined for an empty slug", () => {
		expect(foodBySlug(foods, "")).toBeUndefined();
	});
});

describe("toFoodSlug", () => {
	it("lowercases and hyphenates words", () => {
		expect(toFoodSlug("Chicken Tacos")).toBe("chicken-tacos");
	});

	it("replaces & with 'and'", () => {
		expect(toFoodSlug("Mac & Cheese")).toBe("mac-and-cheese");
	});

	it("strips special characters", () => {
		expect(toFoodSlug("Jalapeño Poppers!")).toBe("jalapeo-poppers");
	});

	it("collapses multiple spaces", () => {
		expect(toFoodSlug("Fish  Tacos")).toBe("fish-tacos");
	});

	it("handles a single word", () => {
		expect(toFoodSlug("Donut")).toBe("donut");
	});
});

describe("fromFoodSlug", () => {
	it("converts hyphens to spaces and title-cases each word", () => {
		expect(fromFoodSlug("chicken-tacos")).toBe("Chicken Tacos");
	});

	it("replaces 'and' with &", () => {
		expect(fromFoodSlug("mac-and-cheese")).toBe("Mac & Cheese");
	});

	it("handles a single word slug", () => {
		expect(fromFoodSlug("donut")).toBe("Donut");
	});

	it("title-cases every word", () => {
		expect(fromFoodSlug("fish-and-chips")).toBe("Fish & Chips");
	});

	it("is the inverse of toFoodSlug for simple names", () => {
		const name = "Chicken Tacos";
		expect(fromFoodSlug(toFoodSlug(name))).toBe(name);
	});

	it("is the inverse of toFoodSlug for names with &", () => {
		const name = "Mac & Cheese";
		expect(fromFoodSlug(toFoodSlug(name))).toBe(name);
	});
});
