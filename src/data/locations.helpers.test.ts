import { LOCATIONS } from "./locations.const";
import { isEatingOut } from "./locations.helpers";

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
