import { useNavigate } from "react-router-dom"
import { InfoBar } from "./InfoBar/InfoBar"
import type { Food } from "../types"
import { Background } from "./Background/Background"
import { Graphic } from "./Graphic/Graphic"
import { Icon } from "./Icon/Icon"
import { Title } from "./Title/Title"
import { getCardHeight, getCardRatio } from "./Card.helpers"
import { toFoodSlug } from "../helpers"
import "./Card.css"

type CardProps = {
  food: Food
}

const CARD_WIDTH = 500;

export default function Card({ food }: CardProps) {
  const navigate = useNavigate()
  const cardW = CARD_WIDTH
  const cardH = getCardHeight(cardW)
  const cardRatio = getCardRatio(cardW)

  return (
    <div
      className="card"
      style={{
        height: `${cardH}px`,
        width: `${cardW}px`,
        cursor: "pointer",
      }}
      onClick={() => navigate(`/food/${toFoodSlug(food.name)}`)}
    >
      <Title cardRatio={cardRatio} name={food.name} />
      <Icon cardRatio={cardRatio} src={food.icon_url}/>
      <Graphic cardRatio={cardRatio} cardW={cardW} name={food.name} src={food.image_url} />
      {food.info && (
          <InfoBar cardRatio={cardRatio} text={food.info} />
      )}
      <Background cardH={cardH} cardW={cardW} src={food.background_url} />
    </div>
  )
}
