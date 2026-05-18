import { CATEGORIES } from "../categories"
import type { Food } from "../types"

export const SIDES_FOODS: Food[] = [
  {
    category_key: CATEGORIES.sides,
    id: 5,
    image_url: "/graphics/sides/sides/mashed-potatoes.jpg",
    ingredients: ["Water", "Milk", "Butter", "Potato flakes"],
    instructions: [
      "Boil liquid: In a saucepan, bring the water, butter, and salt to a boil.",
      "Remove heat: Take the saucepan off the heat source.",
      "Add milk & flakes: Stir in the cold milk, then gently add the potato flakes.",
    ],
    name: "Mashed Potatoes",
  },
  {
    category_key: CATEGORIES.sides,
    cookTime: {
      instructions: "Cook in oven",
      time: "8m",
    },
    id: 2,
    image_url: "/graphics/sides/sides/texas-toast.jpg",
    info: "Preheat oven to 425°",
    instructions: "Put parchment on a cooking sheet.",
    name: "Texas Toast",
  },
  {
    category_key: CATEGORIES.sides,
    id: 21,
    image_url: "/graphics/sides/sides/bacon.jpg",
    name: "Bacon",
  },
  {
    category_key: CATEGORIES.sides,
    id: 22,
    image_url: "/graphics/sides/sides/breadsticks.jpg",
    name: "Breadsticks",
  },
  {
    category_key: CATEGORIES.sides,
    id: 23,
    image_url: "/graphics/sides/sides/cheese-sticks-pizza.jpg",
    name: "Cheese Sticks (Pizza)",
  },
  {
    category_key: CATEGORIES.sides,
    id: 24,
    image_url: "/graphics/sides/sides/corn-doggies.jpg",
    name: "Corn Doggies",
  },
  {
    category_key: CATEGORIES.sides,
    id: 25,
    image_url: "/graphics/sides/sides/crinkle-cut-fries.jpg",
    name: "Crinkle Cut Fries",
  },
  {
    category_key: CATEGORIES.sides,
    id: 26,
    image_url: "/graphics/sides/sides/french-fries.jpg",
    name: "French Fries",
  },
  {
    category_key: CATEGORIES.sides,
    id: 27,
    image_url: "/graphics/sides/sides/hashbrown.jpg",
    name: "Hashbrown",
  },
  {
    category_key: CATEGORIES.sides,
    id: 28,
    image_url: "/graphics/sides/sides/scrambled-eggs.jpg",
    name: "Scrambled Eggs",
  },
  {
    category_key: CATEGORIES.sides,
    id: 29,
    image_url: "/graphics/sides/sides/steak-fries.jpg",
    name: "Steak Fries",
  },
  {
    category_key: CATEGORIES.sides,
    id: 30,
    image_url: "/graphics/sides/sides/tater-tots.jpg",
    name: "Tater Tots",
  },
]
