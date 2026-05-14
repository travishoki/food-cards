import { getIconDimensions, getTop } from "./Icon.helpers"
import "./Icon.css"
import { getSidePadding } from "../Card.helpers"

type IconProps = {
    cardRatio: number
    src: string
}

export const Icon = ({cardRatio, src}: IconProps) => {
    const { height, width } = getIconDimensions(cardRatio)
    const top = getTop(cardRatio)
    const right = getSidePadding(cardRatio);

    return (
        <img
        className="iconImg"
        src={src}
        style={{
            right: `${right}px`,
            top: `${top}px`,
        }}
        width={width}
        height={height}
        alt=""
      />
    )
}