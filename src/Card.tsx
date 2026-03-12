import './Card.css'

type CardProps = {
  image: string
  width?: string
  height?: string
}

function Card({ image, width = '750px', height = '1050px' }: CardProps) {
  return (
    <div className="card">
      <p>French Bread</p>
      <img src={image} width={width} height={height} />
    </div>
  )
}

export default Card
