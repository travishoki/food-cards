/** Matches `FoodCatalog::CATEGORY_ORDER` in Rails. */
export const CATEGORY_ORDER = [
  "sugar_fat_salt",
  "fats_oils",
  "protein",
  "dairy",
  "grains",
  "fruit_veg",
] as const

export type CategoryKey = (typeof CATEGORY_ORDER)[number]
