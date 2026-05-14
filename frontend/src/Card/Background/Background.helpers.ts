import { backgroundHeight, backgroundWidth } from "../Card.const"

export const getBackgroundDimensions = (cardWidth: number) => {
    const width = cardWidth
    const wRatio = cardWidth / backgroundWidth
    const height = backgroundHeight * wRatio

    return {
        height,
        width,
    }
}
