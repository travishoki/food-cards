import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { subCategoriesForTop } from "../CategoryMenu.helpers";

export const SubMenu = () => {
    const { topCategory, subCategory } = useParams<{ topCategory?: string; subCategory?: string }>()
    const subMenu = useMemo(() => topCategory ? subCategoriesForTop(topCategory) : [], [topCategory])
    const navigate = useNavigate()

    if (subMenu.length <= 1) return null

    return (
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
    )
}
