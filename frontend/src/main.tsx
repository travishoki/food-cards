import { useEffect, useMemo, useState } from "react"
import { createRoot } from "react-dom/client"
import Card from "./Card"
import type { Food, MenuSelection } from "./types"
import "./index.css"
import { normalizeFoods, menuFromFoods } from "./main.helpers"

function App() {
  const [foods, setFoods] = useState<Food[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [menuSelection, setMenuSelection] = useState<MenuSelection>("all")

  useEffect(() => {
    let cancelled = false
    const ac = new AbortController()

    fetch("/api/foods", { signal: ac.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<unknown>
      })
      .then((data) => {
        if (!cancelled) setFoods(normalizeFoods(data))
      })
      .catch((err) => {
        if (cancelled || (err instanceof DOMException && err.name === "AbortError")) return
        setError("Could not load foods. Is Rails running on port 3000?")
      })

    return () => {
      cancelled = true
      ac.abort()
    }
  }, [])

  const menu = useMemo(() => (foods ? menuFromFoods(foods) : []), [foods])

  const visibleFoods = useMemo(() => {
    if (!foods) return []
    const sel = menuSelection.trim()
    if (sel === "all") return foods
    const filtered = foods.filter((f) => f.category_key === sel)
    filtered.sort((a, b) => a.id - b.id)
    return filtered
  }, [foods, menuSelection])

  return (
    <>
      <h1 id="top">Food Cards</h1>
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

createRoot(document.getElementById("root")!).render(<App />)
