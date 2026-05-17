import { useMemo } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom"
import Card from "./Card/Card"
import { CategoryMenu } from "./CategoryMenu/CategoryMenu"
import "./index.css"
import { FOODS } from "./foods"
import { TOP_CATEGORY_ORDER, TOP_CATEGORY_SUBCATEGORIES } from "./categories"

function App() {
    const { topCategory, subCategory } = useParams<{ topCategory?: string; subCategory?: string }>()

    const visibleFoods = useMemo(() => {
        if (!topCategory) return FOODS
        if (!subCategory) {
            const keys = TOP_CATEGORY_SUBCATEGORIES[topCategory as keyof typeof TOP_CATEGORY_SUBCATEGORIES]
            return keys ? FOODS.filter((f) => keys.includes(f.category_key)) : FOODS
        }
        return [...FOODS.filter((f) => f.category_key === subCategory)].sort((a, b) => a.id - b.id)
    }, [topCategory, subCategory])

    return (
        <>
            <h1 id="top">Food Cards</h1>
            <CategoryMenu />
            <div className="food-cards">
                {visibleFoods.map((food) => (
                    <Card key={food.id} food={food} />
                ))}
            </div>
        </>
    )
}

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/:topCategory", element: <App /> },
    { path: "/:topCategory/:subCategory", element: <App /> },
])

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />)
