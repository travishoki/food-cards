import { useNavigate, useParams } from "react-router-dom"
import { InfoBar } from "./InfoBar/InfoBar"
import { CookTime } from "./CookTime/CookTime"
import { Ingredients } from "./Ingredients/Ingredients"
import { Instructions } from "./Instructions/Instructions"
import { Toppings } from "./Toppings/Toppings"
import type { Food } from "../types"
import { Background } from "./Background/Background"
import { Graphic } from "./Graphic/Graphic"
import { Icon } from "./Icon/Icon"
import { Title } from "./Title/Title"
import { getCardHeight, getCardRatio, getSidePadding } from "./Card.helpers"
import { CARD_INFO_TOP } from "./Card.const"
import { toFoodSlug } from "../helpers"
import "./Card.css"

type CardProps = {
  food: Food
}

const CARD_WIDTH = 500;

export default function Card({ food }: CardProps) {
  const navigate = useNavigate()
  const { topCategory, subCategory, foodName } = useParams<{ topCategory?: string; subCategory?: string; foodName?: string }>()
  const cardW = CARD_WIDTH
  const cardH = getCardHeight(cardW)
  const cardRatio = getCardRatio(cardW)
  const isDetailView = !!foodName

  const handleClick = isDetailView ? undefined : () => {
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
        cursor: isDetailView ? "default" : "pointer",
      }}
      onClick={handleClick}
    >
      <Title cardRatio={cardRatio} name={food.name} />
      <Icon cardRatio={cardRatio} categoryKey={food.category_key}/>
      <Graphic cardRatio={cardRatio} cardW={cardW} name={food.name} src={food.image_url} />
      <div style={{
          position: "absolute",
          top: `${CARD_INFO_TOP * cardRatio}px`,
          left: `${getSidePadding(cardRatio)}px`,
          right: `${getSidePadding(cardRatio)}px`,
      }}>
          {food.info && (
              <InfoBar cardRatio={cardRatio} text={food.info} />
          )}
          {food.instructions && (
              <Instructions cardRatio={cardRatio} text={food.instructions} />
          )}
          {food.ingredients && (
              <Ingredients cardRatio={cardRatio} items={food.ingredients} />
          )}
          {food.toppings && (
              <Toppings cardRatio={cardRatio} items={food.toppings} />
          )}
          {food.cookTime && (
              <CookTime cardRatio={cardRatio} time={food.cookTime.time} instructions={food.cookTime.instructions} />
          )}
      </div>
      <Background cardH={cardH} cardW={cardW} categoryKey={food.category_key} />
    </div>
  )
}
