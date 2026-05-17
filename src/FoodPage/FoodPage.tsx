import { useParams } from "react-router-dom"
import Card from "../Card/Card"
import { CategoryMenu } from "../CategoryMenu/CategoryMenu"
import { FOODS } from "../foods"
import { foodBySlug } from "../helpers"
import { Food } from "../types"
import { BackButton } from "./BackButton"

export const FoodPage = () => {
    const { foodName } = useParams<{ foodName: string }>()
    const food = foodBySlug(FOODS, foodName ?? "") as Food

    if (!food) return <p>Food not found.</p>

    return (
        <>
            <h1 id="top">Food Cards</h1>
            <CategoryMenu />
            <div className="food-cards">
                <BackButton />
                <Card food={food} />
            </div>
        </>
    )
}
