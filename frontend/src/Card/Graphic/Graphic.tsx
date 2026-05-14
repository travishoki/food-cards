import { getDimensions, getTop } from "./Graphic.helpers"
import { getCenteredLeft } from "../Card.helpers"
import "./Graphic.css"

type GraphicProps = {
    cardRatio: number
    cardW: number
    name: string
    src: string
}


export const Graphic = ({cardRatio, cardW, name, src}: GraphicProps) => {
    const { height, width } = getDimensions(cardRatio)
    const left = getCenteredLeft(width, cardW)
    const top = getTop(cardRatio)

    return (
        <img
            className="graphicImg"
            src={src}
            style={{
                left: `${left}px`,
                top: `${top}px`
            }}
            width={width}
            height={height}
            alt={name}
      />
    )
}