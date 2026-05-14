import "./Card.css"
import { InfoBar } from "./InfoBar/InfoBar"
import type { Food } from "../types"
import { Background } from "./Background/Background"
import { FoodImage } from "./FoodImage/FoodImage"
import { Icon } from "./Icon/Icon"
import { Title } from "./Title/Title"

type CardProps = {
  food: Food
}

export default function Card({ food }: CardProps) {
  return (
    <div className="card">
      <Title name={food.name} />
      <Icon src={food.icon_url}/>
      <FoodImage name={food.name} src={food.image_url} />
      {food.info && (
          <InfoBar text={food.info} />
      )}
      <Background src={food.background_url} />
    </div>
  )
}
