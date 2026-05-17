import { CATEGORIES } from "../categories"
import type { Food } from "../types"

export const BREAKFAST_FOODS: Food[] = [
  {
    id: 13,
    name: "Crepes",
    category_key: CATEGORIES.breakfast,
    image_url: "/graphics/main/breakfast/crepes.jpg",
    ingredients: [
      "1 cup milk",
      "⅔ cup all-purpose flour",
      "2 large eggs",
      "2 ½ teaspoons vegetable oil, divided",
      "1 pinch salt",
    ],
    toppings: [
      "Strawberry",
      "Blue Berries",
      "Banana",
      "Carmel",
      "Chocolate Syrup",
      "Whipped Cream",
      "Powdered Sugar"
    ],
  },
]
