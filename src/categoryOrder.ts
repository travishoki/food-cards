export const CATEGORY_ORDER = [
  "sugar_fat_salt",
  "fats_oils",
  "protein",
  "dairy",
  "grains",
  "fruit",
  "vegetables",
] as const

export type CategoryKey = (typeof CATEGORY_ORDER)[number]
