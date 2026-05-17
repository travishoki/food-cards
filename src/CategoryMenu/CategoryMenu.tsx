import { useMemo } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { topMenuItems, subCategoriesForTop } from "./CategoryMenu.helpers"
import "./CategoryMenu.css"

export const CategoryMenu = () => {
    const { topCategory, subCategory } = useParams<{ topCategory?: string; subCategory?: string }>()
    const navigate = useNavigate()

    const topMenu = useMemo(() => topMenuItems(), [])
    const subMenu = useMemo(() => topCategory ? subCategoriesForTop(topCategory) : [], [topCategory])

    return (
        <>
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
            {subMenu.length > 1 && (
                <nav className="category-menu" aria-label="Food subcategories">
                    <button
                        type="button"
                        className={`category-menu__link ${!subCategory ? "is-active" : ""}`}
                        onClick={() => navigate(`/${topCategory}`)}
                    >
                        All
                    </button>
                    {subMenu.map((cat) => (
                        <button
                            key={cat.key}
                            type="button"
                            className={`category-menu__link ${subCategory === cat.key ? "is-active" : ""}`}
                            onClick={() => navigate(`/${topCategory}/${cat.key}`)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </nav>
            )}
        </>
    )
}
