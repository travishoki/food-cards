import { StrictMode, useEffect, useMemo, useState } from "react"
import { createRoot } from "react-dom/client"
import Card from "./Card"
import { CATEGORY_ORDER } from "./categoryOrder"
import type { Food } from "./types"
import "./index.css"

type MenuSelection = "all" | string

function menuFromFoods(foods: Food[]) {
  return CATEGORY_ORDER.map((key) => {
    const food = foods.find((f) => f.category_key === key)
    if (!food) return null
    return { key, label: food.category_label }
  }).filter(Boolean) as { key: string; label: string }[]
}

function App() {
  const [foods, setFoods] = useState<Food[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [menuSelection, setMenuSelection] = useState<MenuSelection>("all")

  useEffect(() => {
    fetch("/api/foods")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<Food[]>
      })
      .then(setFoods)
      .catch(() => setError("Could not load foods. Is Rails running on port 3000?"))
  }, [])

  const menu = useMemo(() => (foods ? menuFromFoods(foods) : []), [foods])

  const visibleFoods = useMemo(() => {
    if (!foods) return []
    if (menuSelection === "all") return foods
    return foods.filter((f) => f.category_key === menuSelection)
  }, [foods, menuSelection])

  return (
    <>
      <h1 id="top">Food Cards (React)</h1>
      {error && <p role="alert">{error}</p>}
      {!error && foods === null && <p>Loading…</p>}
      {foods && (
        <>
          <nav className="category-menu" aria-label="Food categories">
            <button
              type="button"
              className={`category-menu__link ${menuSelection === "all" ? "is-active" : ""}`}
              onClick={() => setMenuSelection("all")}
            >
              All
            </button>
            {menu.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`category-menu__link ${menuSelection === cat.key ? "is-active" : ""}`}
                onClick={() => setMenuSelection(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </nav>
          <div className="food-cards">
            {visibleFoods.map((food) => (
              <Card key={food.id} food={food} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
