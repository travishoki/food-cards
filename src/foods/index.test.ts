import { FOODS } from "./index";

describe("FOODS", () => {
	it("has unique ids across all foods", () => {
		const ids = FOODS.map((f) => f.id);
		const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

		expect(duplicates).toEqual([]);
	});
});
