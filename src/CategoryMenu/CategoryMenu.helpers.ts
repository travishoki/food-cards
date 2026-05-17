import { CATEGORY_DATA, CATEGORY_ORDER } from "../categories"

export function menuFromFoods() {
    return CATEGORY_ORDER.map((key) => {
      const label = CATEGORY_DATA[key].label
      
      return { key, label }
    }).filter(Boolean) as { key: string; label: string }[]
  }
  