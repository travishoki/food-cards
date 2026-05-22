import { foodBySlug } from "./slug.helpers";

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
