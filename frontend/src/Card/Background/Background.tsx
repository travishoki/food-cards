import { getBackgroundDimensions } from "./Background.helpers"

type BackgroundProps = {
    cardRatio: number
    src: string
}

export const Background = ({cardRatio, src}: BackgroundProps) => {
    const { height, width } = getBackgroundDimensions(cardRatio)

    return (
        <img
            src={src}
            width={width}
            height={height}
            alt=""
      />
    )
}