import {
    COOK_TIME_CLOCK_SIZE,
    COOK_TIME_FONT_SIZE_INSTRUCTIONS,
    COOK_TIME_FONT_SIZE_TIME,
    COOK_TIME_HEIGHT,
    COOK_TIME_TOP,
} from "../Card.const"
import { getSidePadding } from "../Card.helpers"
import "./CookTime.css"

type CookTimeProps = {
    cardRatio: number
    time: string
    instructions: string
}

export const CookTime = ({ cardRatio, time, instructions }: CookTimeProps) => {
    const top = COOK_TIME_TOP * cardRatio
    const height = COOK_TIME_HEIGHT * cardRatio
    const padding = getSidePadding(cardRatio)
    const clockSize = COOK_TIME_CLOCK_SIZE * cardRatio
    const fontSizeTime = COOK_TIME_FONT_SIZE_TIME * cardRatio
    const fontSizeInstructions = COOK_TIME_FONT_SIZE_INSTRUCTIONS * cardRatio

    return (
        <div
            className="cook-time"
            style={{ top: `${top}px`, height: `${height}px`, left: `${padding}px`, right: `${padding}px` }}
        >
            <img src="/stamps/clock.png" width={clockSize} height={clockSize} alt="" />
            <span className="cook-time__instructions" style={{ fontSize: `${fontSizeInstructions}px` }}>{instructions}</span>
            <span className="cook-time__time" style={{ fontSize: `${fontSizeTime}px` }}>{time}</span>
        </div>
    )
}
