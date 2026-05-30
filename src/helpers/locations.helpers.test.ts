import { isEatingOut, isHome } from "./locations.helpers";
import { LOCATIONS } from "../const/locations.const";

describe("isEatingOut", () => {
	it("returns true for fast-food", () => {
		expect(isEatingOut(LOCATIONS["fast-food"])).toBe(true);
	});

	it("returns true for restaurant", () => {
		expect(isEatingOut(LOCATIONS.restaurant)).toBe(true);
	});

	it("returns false for home", () => {
		expect(isEatingOut(LOCATIONS.home)).toBe(false);
	});

	it("returns false for null (All)", () => {
		expect(isEatingOut(null)).toBe(false);
	});
});

describe("isHome", () => {
	it("returns true for home", () => {
		expect(isHome(LOCATIONS.home)).toBe(true);
	});

	it("returns false for fast-food", () => {
		expect(isHome(LOCATIONS["fast-food"])).toBe(false);
	});

	it("returns false for restaurant", () => {
		expect(isHome(LOCATIONS.restaurant)).toBe(false);
	});
});
