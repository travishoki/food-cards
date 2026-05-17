import { CATEGORIES } from "../categories"
import type { Food } from "../types"

export const SIDES_FOODS: Food[] = [
  {
    id: 5,
    name: "Mashed Potatoes",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/mashed-potatoes.jpg",
    ingredients: ["Water", "Milk", "Butter", "Potato flakes"],
    instructions: [
      "Boil liquid: In a saucepan, bring the water, butter, and salt to a boil.",
      "Remove heat: Take the saucepan off the heat source.",
      "Add milk & flakes: Stir in the cold milk, then gently add the potato flakes.",
    ],
  },
  {
    id: 2,
    name: "Texas Toast",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/texas-toast.jpg",
    info: "Preheat oven to 425°",
    instructions: "Put parchment on a cooking sheet.",
    cookTime: {
      time: "8m",
      instructions: "Cook in oven"
    },
  },
]
