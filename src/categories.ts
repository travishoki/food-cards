export const TOP_CATEGORIES = {
    main: 'main',
    snack: 'snack',
    sweets: 'sweets',
} as const

export type TopCategoryKey = keyof typeof TOP_CATEGORIES

export const TOP_CATEGORY_ORDER: TopCategoryKey[] = ['main', 'snack', 'sweets']

export const TOP_CATEGORY_DATA: Record<TopCategoryKey, { label: string }> = {
    main: { label: 'Main' },
    snack: { label: 'Snack' },
    sweets: { label: 'Sweets' },
}

export const CATEGORIES = {
    candy: 'candy',
    dairy: 'dairy',
    dessert: 'dessert',
    fats_oils: 'fats_oils',
    fruit: 'fruit',
    grains: 'grains',
    protein: 'protein',
    vegetables: 'vegetables',
}

export const MAIN_CATEGORY_ORDER = [
    CATEGORIES.vegetables,
]

export const SNACK_CATEGORY_ORDER = [
    CATEGORIES.dairy,
    CATEGORIES.fats_oils,
    CATEGORIES.fruit,
    CATEGORIES.grains,
    CATEGORIES.protein,
]

export const SWEETS_CATEGORY_ORDER = [
    CATEGORIES.candy,
    CATEGORIES.dessert,
]

export const TOP_CATEGORY_SUBCATEGORIES: Record<TopCategoryKey, string[]> = {
    main: MAIN_CATEGORY_ORDER,
    snack: SNACK_CATEGORY_ORDER,
    sweets: SWEETS_CATEGORY_ORDER,
}

export { CANDY_CATEGORY_DATA } from "./categories/candy"
export { DAIRY_CATEGORY_DATA } from "./categories/dairy"
export { DESSERT_CATEGORY_DATA } from "./categories/dessert"
export { FATS_OILS_CATEGORY_DATA } from "./categories/fats_oils"
export { FRUIT_CATEGORY_DATA } from "./categories/fruit"
export { GRAINS_CATEGORY_DATA } from "./categories/grains"
export { PROTEIN_CATEGORY_DATA } from "./categories/protein"
export { VEGETABLES_CATEGORY_DATA } from "./categories/vegetables"

import { CANDY_CATEGORY_DATA } from "./categories/candy"
import { DAIRY_CATEGORY_DATA } from "./categories/dairy"
import { DESSERT_CATEGORY_DATA } from "./categories/dessert"
import { FATS_OILS_CATEGORY_DATA } from "./categories/fats_oils"
import { FRUIT_CATEGORY_DATA } from "./categories/fruit"
import { GRAINS_CATEGORY_DATA } from "./categories/grains"
import { PROTEIN_CATEGORY_DATA } from "./categories/protein"
import { VEGETABLES_CATEGORY_DATA } from "./categories/vegetables"

export const CATEGORY_DATA: Record<string, { label: string }> = {
    [CATEGORIES.candy]: CANDY_CATEGORY_DATA,
    [CATEGORIES.dairy]: DAIRY_CATEGORY_DATA,
    [CATEGORIES.dessert]: DESSERT_CATEGORY_DATA,
    [CATEGORIES.fats_oils]: FATS_OILS_CATEGORY_DATA,
    [CATEGORIES.fruit]: FRUIT_CATEGORY_DATA,
    [CATEGORIES.grains]: GRAINS_CATEGORY_DATA,
    [CATEGORIES.protein]: PROTEIN_CATEGORY_DATA,
    [CATEGORIES.vegetables]: VEGETABLES_CATEGORY_DATA,
}
