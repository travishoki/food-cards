import { backgroundWidth, backgroundHeight, foodWidth, foodHeight } from "./Card.const"
import "./Card.css"
import type { Food } from "./types"

const iconWidth = 54
const iconHeight = iconWidth

type CardProps = {
  food: Food
}

export default function Card({ food }: CardProps) {
  const foodXPos = (backgroundWidth - foodWidth) / 2 + 4

  return (
    <div className="card">
      <p className="title">{food.name}</p>
      <img
        className="iconImg"
        src={food.icon_url}
        width={iconWidth}
        height={iconHeight}
        alt=""
      />
      <img
        className="foodImg"
        src={food.image_url}
        style={{ left: `${foodXPos}px` }}
        width={foodWidth}
        height={foodHeight}
        alt={food.name}
      />
      <img
        src={food.background_url}
        width={backgroundWidth}
        height={backgroundHeight}
        alt=""
      />
    </div>
  )
}
