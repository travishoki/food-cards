import { CATEGORIES } from "../categories"
import type { Food } from "../types"

export const ENTREE_FOODS: Food[] = [
  {
    id: 14,
    name: "Square Pizza",
    category_key: CATEGORIES.entree,
    image_url: "/graphics/main/entree/square-pizza.jpg",
    info: "Preheat oven to 450°",
    instructions: "Unwrap pizza. Put parchment on a cooking sheet. Add pepperonis.",
    cookTime: { time: "10–12m", instructions: "Cook in oven"}
  },
]
