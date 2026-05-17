import { useParams, useNavigate } from "react-router-dom"
import Card from "../Card/Card"
import { CategoryMenu } from "../CategoryMenu/CategoryMenu"
import { FOODS } from "../foods"
import { foodBySlug } from "../helpers"
import { Food } from "../types"

export const FoodPage = () => {
    const { foodName } = useParams<{ foodName: string }>()
    const navigate = useNavigate()
    const food = foodBySlug(FOODS, foodName ?? "") as Food

    if (!food) return <p>Food not found.</p>

    return (
        <>
            <h1 id="top">Food Cards</h1>
            <CategoryMenu />
            <div className="food-cards">
                <button type="button" className="category-menu__link" onClick={() => navigate(-1)}>Back</button>
                <Card food={food} />
            </div>
        </>
    )
}
