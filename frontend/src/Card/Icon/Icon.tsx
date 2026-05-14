const iconWidth = 54
const iconHeight = iconWidth


type IconProps = {
    src: string
}

export const Icon = ({src}: IconProps) => {
    return (
        <img
        className="iconImg"
        src={src}
        width={iconWidth}
        height={iconHeight}
        alt=""
      />
    )
}