import { backgroundWidth, iconSize } from "../Card.const"

export const getIconDimensions = (cardWidth: number) => {
    const wRatio = cardWidth / backgroundWidth
    const width = iconSize * wRatio
    const height = width

    return {
        height,
        width,
    }
}
