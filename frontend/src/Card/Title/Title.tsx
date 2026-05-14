import { getSidePadding } from "../Card.helpers"
import { getTop } from "./Title.helpers"
import "./Title.css"

type TitleProps = {
    cardRatio: number
    name: string
}

export const Title = ({cardRatio, name}: TitleProps) => {
    const top = getTop(cardRatio);
    const left = getSidePadding(cardRatio);

    return (
        <p
            className="card-title"
            style={{
                left: `${left}px`,
                top: `${top}px`
            }}
        >{name}</p>
    )
}