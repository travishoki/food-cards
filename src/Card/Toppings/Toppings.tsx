import { TOPPINGS_FONT_SIZE, TOPPINGS_TOP } from "../Card.const"
import { getSidePadding } from "../Card.helpers"
import "./Toppings.css"

type ToppingsProps = {
    cardRatio: number
    items: string[]
}

export const Toppings = ({ cardRatio, items }: ToppingsProps) => {
    const top = TOPPINGS_TOP * cardRatio
    const fontSize = TOPPINGS_FONT_SIZE * cardRatio
    const left = getSidePadding(cardRatio)

    return (
        <div className="toppings" style={{ top: `${top}px`, left: `${left}px`, fontSize: `${fontSize}px` }}>
            <span className="toppings__label">Toppings</span>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
