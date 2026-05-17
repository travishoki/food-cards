import { CATEGORIES } from "../categories"
import type { Food } from "../types"

export const SIDES_FOODS: Food[] = [
  {
    id: 5,
    name: "Mashed Potatoes",
    category_key: CATEGORIES.sides,
    background_url: "/backgrounds/5-purple.png",
    icon_url: "/icons/fruit.png",
    image_url: "/graphics/sides/sides/mashed-potatoes.jpg",
  },
  {
    id: 2,
    name: "Texas Toast",
    category_key: CATEGORIES.sides,
    background_url: "/backgrounds/2-yellow.png",
    icon_url: "/icons/fruit.png",
    image_url: "/graphics/sides/sides/texas-toast.jpg",
    info: "Preheat oven to 425°",
  },
]
