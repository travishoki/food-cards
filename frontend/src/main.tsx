import { StrictMode, useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import Card from "./Card"
import type { Food } from "./types"
import "./index.css"

function App() {
  const [foods, setFoods] = useState<Food[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/foods")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<Food[]>
      })
      .then(setFoods)
      .catch(() => setError("Could not load foods. Is Rails running on port 3000?"))
  }, [])

  return (
    <>
      <h1>Food Cards (React)</h1>
      {error && <p role="alert">{error}</p>}
      {!error && foods === null && <p>Loading…</p>}
      {foods && (
        <div className="food-cards">
          {foods.map((food) => (
            <Card key={food.id} food={food} />
          ))}
        </div>
      )}
    </>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
