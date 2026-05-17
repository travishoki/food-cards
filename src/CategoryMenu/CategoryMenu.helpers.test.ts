import { topMenuItems, subCategoriesForTop } from "./CategoryMenu.helpers"
import { TOP_CATEGORY_ORDER, TOP_CATEGORY_DATA, TOP_CATEGORY_SUBCATEGORIES, CATEGORY_DATA } from "../categories"

describe("topMenuItems", () => {
    it("returns one entry per top category", () => {
        expect(topMenuItems()).toHaveLength(TOP_CATEGORY_ORDER.length)
    })

    it("returns entries in TOP_CATEGORY_ORDER with correct labels", () => {
        const items = topMenuItems()
        items.forEach((item, i) => {
            expect(item.key).toBe(TOP_CATEGORY_ORDER[i])
            expect(item.label).toBe(TOP_CATEGORY_DATA[item.key].label)
        })
    })
})

describe("subCategoriesForTop", () => {
    it("returns the correct subcategories for each top key", () => {
        TOP_CATEGORY_ORDER.forEach((topKey) => {
            const items = subCategoriesForTop(topKey)
            const expectedKeys = TOP_CATEGORY_SUBCATEGORIES[topKey]
            expect(items.map((i) => i.key)).toEqual(expectedKeys)
        })
    })

    it("returns correct labels from CATEGORY_DATA", () => {
        TOP_CATEGORY_ORDER.forEach((topKey) => {
            subCategoriesForTop(topKey).forEach((item) => {
                expect(item.label).toBe(CATEGORY_DATA[item.key].label)
            })
        })
    })

    it("puts entree under main", () => {
        expect(subCategoriesForTop("main").map((i) => i.key)).toContain("entree")
    })

    it("does not put entree under snack", () => {
        expect(subCategoriesForTop("snack").map((i) => i.key)).not.toContain("entree")
    })

    it("puts candy and dessert under sweets", () => {
        const keys = subCategoriesForTop("sweets").map((i) => i.key)
        expect(keys).toContain("candy")
        expect(keys).toContain("dessert")
    })

    it("puts drinks under drinks", () => {
        expect(subCategoriesForTop("drinks").map((i) => i.key)).toContain("drinks")
    })

    it("puts sides under sides", () => {
        expect(subCategoriesForTop("sides").map((i) => i.key)).toContain("sides")
    })

    it("returns an empty array for an unknown top key", () => {
        expect(subCategoriesForTop("unknown")).toHaveLength(0)
    })
})
