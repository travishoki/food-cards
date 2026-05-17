import { CARD_INFO_PADDING_BOTTOM, INSTRUCTIONS_FONT_SIZE } from "../Card.const"
import "./Instructions.css"

type InstructionsProps = {
    cardRatio: number
    text: string | string[]
}

export const Instructions = ({ cardRatio, text }: InstructionsProps) => {
    const fontSize = INSTRUCTIONS_FONT_SIZE * cardRatio
    const paddingBottom = CARD_INFO_PADDING_BOTTOM * cardRatio
    const style = { fontSize: `${fontSize}px`, paddingBottom: `${paddingBottom}px` }

    if (Array.isArray(text)) {
        return (
            <ol className="instructions" style={style}>
                {text.map((item) => <li key={item}>{item}</li>)}
            </ol>
        )
    }

    return (
        <p className="instructions" style={style}>
            {text}
        </p>
    )
}
