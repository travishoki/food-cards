import { BACKGROUND_HEIGHT, BACKGROUND_WIDTH, PADDING_LEFT } from "./Card.const"

export const getCardRatio = (cardW: number) => {
    return cardW / BACKGROUND_WIDTH
}

export const getCardHeight = (cardW: number) => {
    const wRatio = getCardRatio(cardW)
    const height = BACKGROUND_HEIGHT * wRatio

    return height
}

export const getCenteredLeft = (itemWidth: number, fullWidth: number ) => {
    return (fullWidth - itemWidth) / 2
}

export const getSidePadding = (cardRatio: number) => {
    const left = PADDING_LEFT * cardRatio

    return left
}
