import { ICON_PADDING, ICON_SIZE, ICON_TOP } from "../Card.const"

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

export const getPadding = (cardRatio: number) => {
    const top = ICON_PADDING * cardRatio

    return top
}