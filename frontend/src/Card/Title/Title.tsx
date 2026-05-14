import "./Title.css"

type TitleProps = {
    name: string
}

export const Title = ({name}: TitleProps) => {
    return (
        <p className="card-title">{name}</p>
    )
}