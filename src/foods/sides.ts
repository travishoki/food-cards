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
  {
    id: 21,
    name: "Bacon",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/bacon.jpg",
  },
  {
    id: 22,
    name: "Breadsticks",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/breadsticks.jpg",
  },
  {
    id: 23,
    name: "Cheese Sticks (Pizza)",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/cheese-sticks-pizza.jpg",
  },
  {
    id: 24,
    name: "Corn Doggies",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/corn-doggies.jpg",
  },
  {
    id: 25,
    name: "Crinkle Cut Fries",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/crinkle-cut-fries.jpg",
  },
  {
    id: 26,
    name: "French Fries",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/french-fries.jpg",
  },
  {
    id: 27,
    name: "Hashbrown",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/hashbrown.jpg",
  },
  {
    id: 28,
    name: "Scrambled Eggs",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/scrambled-eggs.jpg",
  },
  {
    id: 29,
    name: "Steak Fries",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/steak-fries.jpg",
  },
  {
    id: 30,
    name: "Tater Tots",
    category_key: CATEGORIES.sides,
    image_url: "/graphics/sides/sides/tater-tots.jpg",
  },
]
