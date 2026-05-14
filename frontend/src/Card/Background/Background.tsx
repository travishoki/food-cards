import { backgroundWidth, backgroundHeight } from "../Card.const"

type BackgroundProps = {
    src: string
}

export const Background = ({src}: BackgroundProps) => {
    return (
        <img
        src={src}
        width={backgroundWidth}
        height={backgroundHeight}
        alt=""
      />
    )
}