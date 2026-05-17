export type Food = {
  id: number
  name: string
  category_key: string
  image_url: string
  info?: string
  ingredients?: string[]
  toppings?: string[]
  cookTime?: { time: string; instructions: string }
}

export type MenuSelection = "all" | string