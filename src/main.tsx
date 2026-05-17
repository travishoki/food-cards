import { useMemo, useState } from "react"
import { createRoot } from "react-dom/client"
import Card from "./Card/Card"
import { CategoryMenu } from "./CategoryMenu/CategoryMenu"
import type { MenuSelection } from "./types"
import "./index.css"
import { FOODS } from "./foods"
import { TOP_CATEGORY_ORDER, TOP_CATEGORY_SUBCATEGORIES } from "./categories"

function App() {
    const [menuSelection, setMenuSelection] = useState<MenuSelection>("all")

    const visibleFoods = useMemo(() => {
        if (menuSelection === "all") return FOODS
        if ((TOP_CATEGORY_ORDER as string[]).includes(menuSelection)) {
            const keys = TOP_CATEGORY_SUBCATEGORIES[menuSelection as keyof typeof TOP_CATEGORY_SUBCATEGORIES]
            return FOODS.filter((f) => keys.includes(f.category_key))
        }
        return [...FOODS.filter((f) => f.category_key === menuSelection)].sort((a, b) => a.id - b.id)
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
