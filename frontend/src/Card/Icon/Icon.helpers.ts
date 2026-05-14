import { ICON_SIZE, ICON_TOP } from "../Card.const"

export const getIconDimensions = (cardRatio: number) => {
    const width = ICON_SIZE * cardRatio
    const height = width

    return {
        height,
        width,
    }
}


export const getTop = (cardRatio: number) => {
    const top = ICON_TOP * cardRatio

    return top
}