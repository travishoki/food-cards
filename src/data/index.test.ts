import { FOODS } from "./index";

describe("FOODS", () => {
	it("has unique slugs across all foods", () => {
		const slugs = FOODS.map((f) => f.slug);
		const duplicates = slugs.filter(
			(slug, index) => slugs.indexOf(slug) !== index,
		);

		expect(duplicates).toEqual([]);
	});
});
