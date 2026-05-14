import { InfoBar } from "./InfoBar/InfoBar"
import type { Food } from "../types"
import { Background } from "./Background/Background"
import { Graphic } from "./Graphic/Graphic"
import { Icon } from "./Icon/Icon"
import { Title } from "./Title/Title"
import { getCardHeight, getCardRatio } from "./Card.helpers"
import "./Card.css"

type CardProps = {
  food: Food
}

const CARD_WIDTH = 500;

export default function Card({ food }: CardProps) {
  const cardW = CARD_WIDTH
  const cardH = getCardHeight(cardW)
  const cardRatio = getCardRatio(cardW)

  return (
    <div
      className="card"
      style={{
        height: `${cardH}px`,
        width: `${cardW}px`
      }}
    >
      <Title cardRatio={cardRatio} name={food.name} />
      <Icon cardRatio={cardRatio} src={food.icon_url}/>
      <Graphic cardRatio={cardRatio} cardW={cardW} name={food.name} src={food.image_url} />
      {food.info && (
          <InfoBar text={food.info} />
      )}
      <Background cardRatio={cardRatio} src={food.background_url} />
    </div>
  )
}
