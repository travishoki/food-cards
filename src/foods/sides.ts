import { CATEGORIES } from "../categories"
import type { Food } from "../types"

export const SIDES_FOODS: Food[] = [
  {
    id: 5,
    name: "Mashed Potatoes",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/mashed-potatoes.jpg",
  },
  {
    id: 2,
    name: "Texas Toast",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/texas-toast.jpg",
    info: "Preheat oven to 425°",
    cookTime: { time: "8m", instructions: "Cook in oven" },
  },
]
