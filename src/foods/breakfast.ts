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
    ingredients: [
      "1 egg",
      "1 tsp All Natural Pure Vanilla Extract",
      "1/2 tsp Ground Cinnamon",
      "1/4 cup milk",
      "4 slices hearty sandwich bread",
    ],
    instructions: [
      "To make this Easy French Toast Recipe: Whisk egg, vanilla, and cinnamon in a shallow dish. Stir in milk.",
      "Dip bread slices in egg mixture, turning to coat evenly on both sides.",
      "Cook bread slices on a lightly greased nonstick griddle or skillet on medium heat until cooked through and browned on both sides.",
      "Serve with butter, sprinkled with confectioners' sugar, or topped with fresh fruit. Also great with Easy Spiced Syrup (recipe follows), if desired.",
    ]
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
    ingredients: [
      "flour"
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
    id: 19,
    name: "Waffles",
    category_key: CATEGORIES.breakfast,
    image_url: "/graphics/main/breakfast/waffles.jpg",
  },
  {
    id: 97,
    name: "Eggo Waffles",
    category_key: CATEGORIES.breakfast,
    image_url: "/graphics/main/breakfast/eggo-waffles.jpg",
  },
]
