import { CARD_INFO_PADDING_BOTTOM, INGREDIENTS_FONT_SIZE } from "../Card.const"
import "./Ingredients.css"

type IngredientsProps = {
    cardRatio: number
    items: string[]
}

export const Ingredients = ({ cardRatio, items }: IngredientsProps) => {
    const fontSize = INGREDIENTS_FONT_SIZE * cardRatio
    const paddingBottom = CARD_INFO_PADDING_BOTTOM * cardRatio

    return (
        <div className="ingredients" style={{ fontSize: `${fontSize}px`, paddingBottom: `${paddingBottom}px` }}>
            <span className="ingredients__label">Ingredients:</span>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
