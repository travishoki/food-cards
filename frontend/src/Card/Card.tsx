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

const CARD_WIDTH = 500;

export default function Card({ food }: CardProps) {
  return (
    <div
      className="card"
      style={{
        width: `${CARD_WIDTH}px`
      }}
    >
      <Title name={food.name} />
      <Icon cardWidth={CARD_WIDTH}  src={food.icon_url}/>
      <FoodImage cardWidth={CARD_WIDTH} name={food.name} src={food.image_url} />
      {food.info && (
          <InfoBar text={food.info} />
      )}
      <Background cardWidth={CARD_WIDTH} src={food.background_url} />
    </div>
  )
}
