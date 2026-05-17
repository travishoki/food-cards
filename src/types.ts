export type Food = {
  id: number
  name: string
  background_url: string
  category_key: string
  icon_url: string
  image_url: string
  info?: string
}

export type MenuSelection = "all" | string