import { getBackgroundDimensions } from "./Background.helpers"

type BackgroundProps = {
    cardWidth: number
    src: string
}

export const Background = ({cardWidth, src}: BackgroundProps) => {
    const { height, width } = getBackgroundDimensions(cardWidth)

    return (
        <img
        src={src}
        width={width}
        height={height}
        alt=""
      />
    )
}