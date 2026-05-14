import { BACKGROUND_WIDTH, GRAPHIC_WIDTH, GRAPHIC_HEIGHT, GRAPHIC_TOP } from "../Card.const"

export const getFoodImageDimensions = (cardWidth: number) => {
    const wRatio = GRAPHIC_WIDTH / BACKGROUND_WIDTH
    const width = wRatio * cardWidth
    const hRatio = GRAPHIC_HEIGHT / GRAPHIC_WIDTH
    const height = hRatio * GRAPHIC_HEIGHT

    return {
        height,
        width,
    }
}

export const getTop = (cardWidth: number) => {
    const wRatio = GRAPHIC_WIDTH / BACKGROUND_WIDTH
    const width = wRatio * cardWidth
    const hRatio = GRAPHIC_HEIGHT / GRAPHIC_WIDTH
    const top = GRAPHIC_TOP * hRatio

    return top
}
