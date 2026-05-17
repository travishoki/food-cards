import { useMemo, useState } from "react"
import { createRoot } from "react-dom/client"
import Card from "./Card/Card"
import { CategoryMenu } from "./CategoryMenu/CategoryMenu"
import type { MenuSelection } from "./types"
import "./index.css"
import { FOODS } from "./foods"

function App() {
  const [menuSelection, setMenuSelection] = useState<MenuSelection>("all")

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
      <CategoryMenu menuSelection={menuSelection} setMenuSelection={setMenuSelection} />
      <div className="food-cards">
        {visibleFoods.map((food) => (
          <Card key={food.id} food={food} />
        ))}
      </div>
    </>
  )
}

createRoot(document.getElementById("root")!).render(<App />)
