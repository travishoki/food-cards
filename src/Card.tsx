import { backgroundHeight, backgroundWidth, foodHeight, foodWidth } from './Card.const.ts'
import './Card.css'
import { foods } from './food.ts'
import type { Food } from './types'

type CardProps = {
  id: number
}

function Card({id}: CardProps) {
  const food = foods.find((food: Food) => food.id === id)

  if (!food) return null

  const foodXPos = ((backgroundWidth - foodWidth)/2) + 4

  return (
    <div className="card">
      <p className="title">{food.name}</p>
      <img className="foodImg" src={food.image} style={{left: `${foodXPos}px`}} width={foodWidth} height={foodHeight} />
      <img src={food.background} width={backgroundWidth} height={backgroundHeight} />
    </div>
  )
}

export default Card
