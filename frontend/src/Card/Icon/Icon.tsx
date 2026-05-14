import { getIconDimensions } from "./Icon.helpers"
import "./Icon.css"

type IconProps = {
    cardWidth: number
    src: string
}

export const Icon = ({cardWidth, src}: IconProps) => {
    const {height, width } = getIconDimensions(cardWidth)

    return (
        <img
        className="iconImg"
        src={src}
        width={width}
        height={height}
        alt=""
      />
    )
}