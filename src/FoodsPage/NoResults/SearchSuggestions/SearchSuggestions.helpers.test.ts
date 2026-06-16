import { getSearchSuggestionKey } from "./SearchSuggestions.helpers";

describe("getSearchSuggestionKey", () => {
	it("uses the slug when a suggestion has one", () => {
		expect(
			getSearchSuggestionKey({
				name: "Apple Chips",
				slug: "apple-chips",
			}),
		).toBe("apple-chips");
	});

	it("falls back to the name when there is no slug", () => {
		expect(getSearchSuggestionKey({ name: "Apple Chips" })).toBe(
			"Apple Chips",
		);
	});
});
