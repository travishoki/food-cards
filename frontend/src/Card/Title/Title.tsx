

type TitleProps = {
    name: string
}

export const Title = ({name}: TitleProps) => {
    return (
        <p className="title">{name}</p>
    )
}