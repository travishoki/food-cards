import { GRAPHIC_WIDTH, GRAPHIC_HEIGHT, GRAPHIC_TOP } from "../Card.const"

export const getDimensions = (cardRatio: number) => {
    const width = GRAPHIC_WIDTH * cardRatio
    const height = GRAPHIC_HEIGHT * cardRatio

    return {
        height,
        width,
    }
}

export const getTop = (cardRatio: number) => {
    const top = GRAPHIC_TOP * cardRatio

    return top
}
