import { CARD_INFO_PADDING_BOTTOM, INSTRUCTIONS_FONT_SIZE } from "../Card.const"
import "./Instructions.css"

type InstructionsProps = {
    cardRatio: number
    text: string
}

export const Instructions = ({ cardRatio, text }: InstructionsProps) => {
    const fontSize = INSTRUCTIONS_FONT_SIZE * cardRatio
    const paddingBottom = CARD_INFO_PADDING_BOTTOM * cardRatio

    return (
        <p className="instructions" style={{ fontSize: `${fontSize}px`, paddingBottom: `${paddingBottom}px` }}>
            {text}
        </p>
    )
}
