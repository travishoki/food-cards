import { buildTopCategoryPath, getErrorMessage } from "./AiSearchInput.helpers";

describe("buildTopCategoryPath", () => {
	it("returns just the category when on home location", () => {
		expect(buildTopCategoryPath("home", "main")).toBe("/main");
	});

	it("includes location prefix when not on home", () => {
		expect(buildTopCategoryPath("restaurant", "main")).toBe(
			"/restaurant/main",
		);
	});

	it("returns root when topCategory is null and on home", () => {
		expect(buildTopCategoryPath("home", null)).toBe("/");
	});

	it("returns base location when topCategory is null and not on home", () => {
		expect(buildTopCategoryPath("restaurant", null)).toBe("/restaurant");
	});
});

describe("getErrorMessage", () => {
	it("returns the error message for an Error instance", () => {
		expect(getErrorMessage(new Error("something failed"))).toBe(
			"something failed",
		);
	});

	it("returns fallback for non-Error values", () => {
		expect(getErrorMessage("string error")).toBe("Something went wrong.");
		expect(getErrorMessage(null)).toBe("Something went wrong.");
		expect(getErrorMessage(42)).toBe("Something went wrong.");
	});
});
