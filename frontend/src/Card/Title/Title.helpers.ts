import { TITLE_TOP } from "../Card.const"

export const getTop = (cardRatio: number) => {
    const top = TITLE_TOP * cardRatio

    return top
}