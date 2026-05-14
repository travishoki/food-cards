import { BACKGROUND_HEIGHT, BACKGROUND_WIDTH } from "../Card.const"

export const getBackgroundDimensions = (carRatio: number) => {
    const width = BACKGROUND_WIDTH * carRatio
    const height = BACKGROUND_HEIGHT * carRatio

    return {
        height,
        width,
    }
}
