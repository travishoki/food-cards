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
  {
    id: 15,
    name: "French Toast",
    category_key: CATEGORIES.breakfast,
    image_url: "/graphics/main/breakfast/french-toast.jpg",
  },
  {
    id: 16,
    name: "Pancakes",
    category_key: CATEGORIES.breakfast,
    image_url: "/graphics/main/breakfast/pancakes.jpg",
  },
  {
    id: 17,
    name: "Puffy Oven Pancakes",
    category_key: CATEGORIES.breakfast,
    image_url: "/graphics/main/breakfast/puffy-oven-pancakes.jpg",
  },
  {
    id: 18,
    name: "Swedish Pancakes",
    category_key: CATEGORIES.breakfast,
    image_url: "/graphics/main/breakfast/swedish-pancakes.jpg",
  },
  {
    id: 19,
    name: "Waffles",
    category_key: CATEGORIES.breakfast,
    image_url: "/graphics/main/breakfast/waffles.jpg",
  },
]
