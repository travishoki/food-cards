import { backgroundWidth, foodWidth, foodHeight, foodTop } from "../Card.const"

export const getFoodImageDimensions = (cardWidth: number) => {
    const wRatio = foodWidth / backgroundWidth
    const width = wRatio * cardWidth
    const hRatio = foodHeight / foodWidth
    const height = hRatio * foodHeight

    return {
        height,
        width,
    }
}

export const getTop = (cardWidth: number) => {
    const wRatio = foodWidth / backgroundWidth
    const width = wRatio * cardWidth
    const hRatio = foodHeight / foodWidth
    const top = foodTop * hRatio

    return top
}
