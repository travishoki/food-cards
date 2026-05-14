import { backgroundWidth, foodWidth, foodHeight } from "../Card.const"

const foodXPos = (backgroundWidth - foodWidth) / 2 + 4

type FoodImageProps = {
    name: string
    src: string
}

export const FoodImage = ({name, src}: FoodImageProps) => {
    return (
        <img
        className="foodImg"
        src={src}
        style={{ left: `${foodXPos}px` }}
        width={foodWidth}
        height={foodHeight}
        alt={name}
      />
    )
}