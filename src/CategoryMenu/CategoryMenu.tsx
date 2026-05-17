import { useMemo, useState } from "react"
import type { MenuSelection } from "../types"
import { topMenuItems, subCategoriesForTop } from "./CategoryMenu.helpers"

type CategoryMenuProps = {
    menuSelection: MenuSelection
    setMenuSelection: (sel: MenuSelection) => void
}

export const CategoryMenu = ({ menuSelection, setMenuSelection }: CategoryMenuProps) => {
    const [topSelection, setTopSelection] = useState<string | null>(null)

    const topMenu = useMemo(() => topMenuItems(), [])
    const subMenu = useMemo(() => topSelection ? subCategoriesForTop(topSelection) : [], [topSelection])

    const handleTopClick = (key: string) => {
        setTopSelection(key)
        setMenuSelection(key)
    }

    const handleTopAllClick = () => {
        setTopSelection(null)
        setMenuSelection("all")
    }

    return (
        <>
            <nav className="category-menu" aria-label="Food categories">
                <button
                    type="button"
                    className={`category-menu__link ${menuSelection === "all" ? "is-active" : ""}`}
                    onClick={handleTopAllClick}
                >
                    All
                </button>
                {topMenu.map((cat) => (
                    <button
                        key={cat.key}
                        type="button"
                        className={`category-menu__link ${topSelection === cat.key ? "is-active" : ""}`}
                        onClick={() => handleTopClick(cat.key)}
                    >
                        {cat.label}
                    </button>
                ))}
            </nav>
            {subMenu.length > 0 && (
                <nav className="category-menu" aria-label="Food subcategories">
                    <button
                        type="button"
                        className={`category-menu__link ${menuSelection === topSelection ? "is-active" : ""}`}
                        onClick={() => setMenuSelection(topSelection!)}
                    >
                        All
                    </button>
                    {subMenu.map((cat) => (
                        <button
                            key={cat.key}
                            type="button"
                            className={`category-menu__link ${menuSelection === cat.key ? "is-active" : ""}`}
                            onClick={() => setMenuSelection(cat.key)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </nav>
            )}
        </>
    )
}
