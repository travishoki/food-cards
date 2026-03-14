import './Card.css'
import { foods } from './food.ts'
import type { Food } from './types'

type CardProps = {
  id: number
}

const width = '750px'
const height = '1050px'


function Card({id}: CardProps) {
  const food = foods.find((food: Food) => food.id === id)

  if (!food) return null

  return (
    <div className="card">
      <p>{food.name}</p>
      <img src={food.image} width={width} height={height} />
    </div>
  )
}

export default Card
