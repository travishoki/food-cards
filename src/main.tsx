import { useMemo, useState } from "react"
import { createRoot } from "react-dom/client"
import Card from "./Card/Card"
import type { MenuSelection } from "./types"
import "./index.css"
import { menuFromFoods } from "./main.helpers"
import { FOODS } from "./data"

function App() {
  const [menuSelection, setMenuSelection] = useState<MenuSelection>("all")

  const menu = useMemo(() => menuFromFoods(FOODS), [])

  const visibleFoods = useMemo(() => {
    const sel = menuSelection.trim()
    if (sel === "all") return FOODS
    const filtered = FOODS.filter((f) => f.category_key === sel)
    filtered.sort((a, b) => a.id - b.id)
    return filtered
  }, [menuSelection])

  return (
    <>
      <h1 id="top">Food Cards</h1>
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
  )
}

createRoot(document.getElementById("root")!).render(<App />)
