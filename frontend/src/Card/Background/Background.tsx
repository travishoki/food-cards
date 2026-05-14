type BackgroundProps = {
    cardH: number
    cardW: number
    src: string
}

export const Background = ({ cardH, cardW, src }: BackgroundProps) => {
    return (
        <img
            src={src}
            width={cardW}
            height={cardH}
            alt=""
      />
    )
}