import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { subCategoriesForTop } from "../CategoryMenu.helpers";

export const SubMenu = () => {
    const { topCategory, subCategory } = useParams<{ topCategory?: string; subCategory?: string }>()
    const subMenu = useMemo(() => topCategory ? subCategoriesForTop(topCategory) : [], [topCategory])
    const navigate = useNavigate()

    if (subMenu.length <= 1) return null

    return (
        <nav aria-label="Food subcategories" className="category-menu">
            <button
                className={`category-menu__link ${!subCategory ? "is-active" : ""}`}
                onClick={() => navigate(`/${topCategory}`)}
                type="button"
            >
                All
            </button>
            {subMenu.map((cat) => (
                <button
                    className={`category-menu__link ${subCategory === cat.key ? "is-active" : ""}`}
                    key={cat.key}
                    onClick={() => navigate(`/${topCategory}/${cat.key}`)}
                    type="button"
                >
                    {cat.label}
                </button>
            ))}
        </nav>
    )
}
