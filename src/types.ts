export type Food = {
  id: number
  name: string
  category_key: string
  image_url: string
  info?: string
}

export type MenuSelection = "all" | string