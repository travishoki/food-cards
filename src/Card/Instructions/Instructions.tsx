import { INSTRUCTIONS_FONT_SIZE, INSTRUCTIONS_TOP } from "../Card.const"
import { getSidePadding } from "../Card.helpers"
import "./Instructions.css"

type InstructionsProps = {
    cardRatio: number
    text: string
}

export const Instructions = ({ cardRatio, text }: InstructionsProps) => {
    const top = INSTRUCTIONS_TOP * cardRatio
    const left = getSidePadding(cardRatio)
    const fontSize = INSTRUCTIONS_FONT_SIZE * cardRatio

    return (
        <p
            className="instructions"
            style={{ top: `${top}px`, left: `${left}px`, fontSize: `${fontSize}px` }}
        >
            {text}
        </p>
    )
}
