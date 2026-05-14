import { BACKGROUND_HEIGHT, BACKGROUND_WIDTH } from "../Card.const"

export const getBackgroundDimensions = (cardWidth: number) => {
    const width = cardWidth
    const wRatio = cardWidth / BACKGROUND_WIDTH
    const height = BACKGROUND_HEIGHT * wRatio

    return {
        height,
        width,
    }
}
