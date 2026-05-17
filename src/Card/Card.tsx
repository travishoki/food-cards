import { useNavigate, useParams } from "react-router-dom"
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
  const { topCategory, subCategory } = useParams<{ topCategory?: string; subCategory?: string }>()
  const cardW = CARD_WIDTH
  const cardH = getCardHeight(cardW)
  const cardRatio = getCardRatio(cardW)

  const handleClick = () => {
    const slug = toFoodSlug(food.name)
    if (topCategory && subCategory) {
      navigate(`/${topCategory}/${subCategory}/food/${slug}`)
    } else if (topCategory) {
      navigate(`/${topCategory}/food/${slug}`)
    } else {
      navigate(`/food/${slug}`)
    }
  }

  return (
    <div
      className="card"
      style={{
        height: `${cardH}px`,
        width: `${cardW}px`,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Title cardRatio={cardRatio} name={food.name} />
      <Icon cardRatio={cardRatio} categoryKey={food.category_key}/>
      <Graphic cardRatio={cardRatio} cardW={cardW} name={food.name} src={food.image_url} />
      {food.info && (
          <InfoBar cardRatio={cardRatio} text={food.info} />
      )}
      <Background cardH={cardH} cardW={cardW} categoryKey={food.category_key} />
    </div>
  )
}
