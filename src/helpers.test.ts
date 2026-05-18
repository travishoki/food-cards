import { toFoodSlug, fromFoodSlug, foodBySlug } from "./helpers";

describe("toFoodSlug", () => {
    it("lowercases the name", () => {
        expect(toFoodSlug("Donut")).toBe("donut");
    });

    it("replaces spaces with hyphens", () => {
        expect(toFoodSlug("Andes Mints")).toBe("andes-mints");
    });

    it("converts & to and", () => {
        expect(toFoodSlug("Sugar & Salt")).toBe("sugar-and-salt");
    });

    it("removes other special characters", () => {
        expect(toFoodSlug("Sugar, Salt")).toBe("sugar-salt");
    });
});

describe("fromFoodSlug", () => {
    it("converts hyphens back to spaces", () => {
        expect(fromFoodSlug("texas-toast")).toBe("Texas Toast");
    });

    it("converts 'and' back to &", () => {
        expect(fromFoodSlug("sugar-and-salt")).toBe("Sugar & Salt");
    });

    it("capitalizes each word", () => {
        expect(fromFoodSlug("andes-mints")).toBe("Andes Mints");
    });
});

describe("foodBySlug", () => {
    const foods = [
        { name: "Donut" },
        { name: "Andes Mints" },
        { name: "Chocolate Milk" },
        { name: "Sugar & Salt" },
    ];

    it("finds a food by its slug", () => {
        expect(foodBySlug(foods, "donut")).toEqual({ name: "Donut" });
    });

    it("finds a food with a multi-word name", () => {
        expect(foodBySlug(foods, "andes-mints")).toEqual({
            name: "Andes Mints",
        });
    });

    it("finds a food whose name contains &", () => {
        expect(foodBySlug(foods, "sugar-and-salt")).toEqual({
            name: "Sugar & Salt",
        });
    });

    it("returns undefined for an unknown slug", () => {
        expect(foodBySlug(foods, "unknown")).toBeUndefined();
    });

    it("returns undefined for an empty slug", () => {
        expect(foodBySlug(foods, "")).toBeUndefined();
    });
});
