export const TOP_CATEGORIES = {
    drinks: 'drinks',
    main: 'main',
    sides: 'sides',
    snack: 'snack',
    sweets: 'sweets',
} as const

export type TopCategoryKey = keyof typeof TOP_CATEGORIES

export const TOP_CATEGORY_ORDER: TopCategoryKey[] = ['drinks', 'main', 'sides', 'snack', 'sweets']

export const TOP_CATEGORY_DATA: Record<TopCategoryKey, { label: string }> = {
    drinks: { label: 'Drinks' },
    main: { label: 'Main' },
    sides: { label: 'Sides' },
    snack: { label: 'Snack' },
    sweets: { label: 'Sweets' },
}

export const CATEGORIES = {
    breakfast: 'breakfast',
    candy: 'candy',
    dairy: 'dairy',
    dessert: 'dessert',
    drinks: 'drinks',
    entree: 'entree',
    fruit: 'fruit',
    grains: 'grains',
    protein: 'protein',
    sides: 'sides',
    vegetables: 'vegetables',
}

export const DRINKS_CATEGORY_ORDER = [
    CATEGORIES.drinks,
]

export const MAIN_CATEGORY_ORDER = [
    CATEGORIES.breakfast,
    CATEGORIES.entree,
]

export const SIDES_CATEGORY_ORDER = [
    CATEGORIES.sides,
]

export const SNACK_CATEGORY_ORDER = [
    CATEGORIES.dairy,
    CATEGORIES.fruit,
    CATEGORIES.grains,
    CATEGORIES.protein,
    CATEGORIES.vegetables,
]

export const SWEETS_CATEGORY_ORDER = [
    CATEGORIES.candy,
    CATEGORIES.dessert,
]

export const TOP_CATEGORY_SUBCATEGORIES: Record<TopCategoryKey, string[]> = {
    drinks: DRINKS_CATEGORY_ORDER,
    main: MAIN_CATEGORY_ORDER,
    sides: SIDES_CATEGORY_ORDER,
    snack: SNACK_CATEGORY_ORDER,
    sweets: SWEETS_CATEGORY_ORDER,
}

export { BREAKFAST_CATEGORY_DATA } from "./categories/breakfast"
export { CANDY_CATEGORY_DATA } from "./categories/candy"
export { DAIRY_CATEGORY_DATA } from "./categories/dairy"
export { DESSERT_CATEGORY_DATA } from "./categories/dessert"
export { DRINKS_CATEGORY_DATA } from "./categories/drinks"
export { FRUIT_CATEGORY_DATA } from "./categories/fruit"
export { GRAINS_CATEGORY_DATA } from "./categories/grains"
export { PROTEIN_CATEGORY_DATA } from "./categories/protein"
export { SIDES_CATEGORY_DATA } from "./categories/sides"
export { ENTREE_CATEGORY_DATA } from "./categories/entree"
export { VEGETABLES_CATEGORY_DATA } from "./categories/vegetables"

import { BREAKFAST_CATEGORY_DATA } from "./categories/breakfast"
import { CANDY_CATEGORY_DATA } from "./categories/candy"
import { DAIRY_CATEGORY_DATA } from "./categories/dairy"
import { DESSERT_CATEGORY_DATA } from "./categories/dessert"
import { DRINKS_CATEGORY_DATA } from "./categories/drinks"
import { FRUIT_CATEGORY_DATA } from "./categories/fruit"
import { GRAINS_CATEGORY_DATA } from "./categories/grains"
import { PROTEIN_CATEGORY_DATA } from "./categories/protein"
import { SIDES_CATEGORY_DATA } from "./categories/sides"
import { ENTREE_CATEGORY_DATA } from "./categories/entree"
import { VEGETABLES_CATEGORY_DATA } from "./categories/vegetables"

export const CATEGORY_DATA: Record<string, { label: string }> = {
    [CATEGORIES.breakfast]: BREAKFAST_CATEGORY_DATA,
    [CATEGORIES.candy]: CANDY_CATEGORY_DATA,
    [CATEGORIES.dairy]: DAIRY_CATEGORY_DATA,
    [CATEGORIES.dessert]: DESSERT_CATEGORY_DATA,
    [CATEGORIES.drinks]: DRINKS_CATEGORY_DATA,
    [CATEGORIES.entree]: ENTREE_CATEGORY_DATA,
    [CATEGORIES.fruit]: FRUIT_CATEGORY_DATA,
    [CATEGORIES.grains]: GRAINS_CATEGORY_DATA,
    [CATEGORIES.protein]: PROTEIN_CATEGORY_DATA,
    [CATEGORIES.sides]: SIDES_CATEGORY_DATA,
    [CATEGORIES.vegetables]: VEGETABLES_CATEGORY_DATA,
}
