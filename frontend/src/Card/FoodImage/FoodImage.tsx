import { getFoodImageDimensions, getTop } from "./FoodImage.helpers"
import "./FoodImage.css"

type FoodImageProps = {
    cardWidth: number
    name: string
    src: string
}


export const FoodImage = ({cardWidth, name, src}: FoodImageProps) => {
    const { height, width } = getFoodImageDimensions(cardWidth)
    const left = (cardWidth-width)/2
    const top = getTop(cardWidth)

    return (
        <img
        className="foodImg"
        src={src}
        style={{ left: `${left}px`, top: `${top}px` }}
        width={width}
        height={height}
        alt={name}
      />
    )
}