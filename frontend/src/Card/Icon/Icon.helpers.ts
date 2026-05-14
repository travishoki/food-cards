import { BACKGROUND_WIDTH, ICON_SIZE } from "../Card.const"

export const getIconDimensions = (cardWidth: number) => {
    const wRatio = cardWidth / BACKGROUND_WIDTH
    const width = ICON_SIZE * wRatio
    const height = width

    return {
        height,
        width,
    }
}
