import { useNavigate } from "react-router-dom"

export const BackButton = () => {
    const navigate = useNavigate()

    return (
        <button type="button" className="category-menu__link" onClick={() => navigate(-1)}>Back</button>
    )
}
