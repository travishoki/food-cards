type BackgroundProps = {
    cardH: number
    cardW: number
    categoryKey: string
}

export const Background = ({ cardH, cardW, categoryKey }: BackgroundProps) => {
    return (
        <img
            alt=""
            height={cardH}
            src={`/backgrounds/${categoryKey}.png`}
            width={cardW}
      />
    )
}