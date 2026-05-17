import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { topMenuItems } from "../CategoryMenu.helpers"

export const Menu = () => {
    const { topCategory } = useParams<{ topCategory?: string }>()
    const navigate = useNavigate()

    const topMenu = useMemo(() => topMenuItems(), [])

    return (
        <nav className="category-menu" aria-label="Food categories">
            <button
                type="button"
                className={`category-menu__link ${!topCategory ? "is-active" : ""}`}
                onClick={() => navigate("/")}
            >
                All
            </button>
            {topMenu.map((cat) => (
                <button
                    key={cat.key}
                    type="button"
                    className={`category-menu__link ${topCategory === cat.key ? "is-active" : ""}`}
                    onClick={() => navigate(`/${cat.key}`)}
                >
                    {cat.label}
                </button>
            ))}
        </nav>
    )
}
