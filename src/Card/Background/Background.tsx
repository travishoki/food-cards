type BackgroundProps = {
    cardH: number
    cardW: number
    categoryKey: string
}

export const Background = ({ cardH, cardW, categoryKey }: BackgroundProps) => {
    return (
        <img
            src={`/backgrounds/${categoryKey}.png`}
            width={cardW}
            height={cardH}
            alt=""
      />
    )
}