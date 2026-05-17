import { getCenteredLeft } from "../Card.helpers"
import { GRAPHIC_HEIGHT, GRAPHIC_TOP, GRAPHIC_WIDTH } from "../Card.const"
import "./Graphic.css"

type GraphicProps = {
    cardRatio: number
    cardW: number
    name: string
    src: string
}


export const Graphic = ({cardRatio, cardW, name, src}: GraphicProps) => {
    const width = GRAPHIC_WIDTH * cardRatio
    const height = GRAPHIC_HEIGHT * cardRatio

    const left = getCenteredLeft(width, cardW)
    const top = GRAPHIC_TOP * cardRatio

    return (
        <img
            className="graphicImg"
            src={src}
            onError={(e) => { e.currentTarget.src = "/missing/missing.jpg" }}
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