import { useMemo } from "react"
import { useParams } from "react-router-dom"
import Card from "../Card/Card"
import { FOODS } from "../foods"
import { TOP_CATEGORY_SUBCATEGORIES } from "../categories"

export const FoodsPage = () => {
    const { subCategory, topCategory } = useParams<{ subCategory?: string, topCategory?: string; }>()

    const visibleFoods = useMemo(() => {
        if (!topCategory) return FOODS
        if (!subCategory) {
            const keys = TOP_CATEGORY_SUBCATEGORIES[topCategory as keyof typeof TOP_CATEGORY_SUBCATEGORIES]
            return keys ? FOODS.filter((f) => keys.includes(f.category_key)) : FOODS
        }
        return [...FOODS.filter((f) => f.category_key === subCategory)].sort((a, b) => a.id - b.id)
    }, [topCategory, subCategory])

    return (
        <div className="food-cards">
            {visibleFoods.map((food) => (
                <Card key={food.id} food={food} />
            ))}
        </div>
    )
}
