import { INGREDIENTS_FONT_SIZE, INGREDIENTS_TOP } from "../Card.const"
import { getSidePadding } from "../Card.helpers"
import "./Ingredients.css"

type IngredientsProps = {
    cardRatio: number
    items: string[]
}

export const Ingredients = ({ cardRatio, items }: IngredientsProps) => {
    const top = INGREDIENTS_TOP * cardRatio
    const fontSize = INGREDIENTS_FONT_SIZE * cardRatio
    const left = getSidePadding(cardRatio)

    return (
        <div className="ingredients" style={{ top: `${top}px`, left: `${left}px`, fontSize: `${fontSize}px` }}>
            <span className="ingredients__label">Ingredients</span>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
