import { useNavigate } from "react-router-dom"

export const BackButton = () => {
    const navigate = useNavigate()
    const onClick = () => navigate(-1)

    return (
        <button type="button" className="category-menu__link" onClick={onClick}>Back</button>
    )
}
