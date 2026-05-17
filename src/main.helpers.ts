import { Food } from "./types"

export function normalizeFoods(raw: unknown): Food[] {
    if (!Array.isArray(raw)) return []

    return raw.map((row) => {
      const o = row as Record<string, unknown>
      const resp = {
        id: Number(o.id),
        name: String(o.name ?? ""),
        category_key: String(o.category_key ?? o.categoryKey ?? "").trim(),
        category_label: String(o.category_label ?? o.categoryLabel ?? "").trim(),
        background_url: String(o.background_url ?? o.backgroundUrl ?? ""),
        icon_url: String(o.icon_url ?? o.iconUrl ?? ""),
        image_url: String(o.image_url ?? o.imageUrl ?? ""),
      }
      
      if (o.info) resp.info = String(o.info)

      return resp
    })
  }
  
