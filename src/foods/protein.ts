import { CATEGORIES } from "../categories"
import type { Food } from "../types"

export const PROTEIN_FOODS: Food[] = [
  {
    id: 3,
    name: "Peanut Butter",
    category_key: CATEGORIES.protein,
    image_url: "/graphics/snack/protein/peanut-butter.jpg",
    instructions: "Just a spoon fool of Peanut Butter can be a good snack.",
  },
  {
    id: 65,
    name: "Pepperoni",
    category_key: CATEGORIES.protein,
    image_url: "/graphics/snack/protein/pepperoni.jpg",
  },
  {
    id: 66,
    name: "Protein Bar",
    category_key: CATEGORIES.protein,
    image_url: "/graphics/snack/protein/protein-bar.jpg",
  },
]
