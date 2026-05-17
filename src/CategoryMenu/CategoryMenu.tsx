import { useMemo } from "react";
import type { MenuSelection } from "../types"
import { menuFromFoods } from "./CategoryMenu.helpers"

type CategoryMenuProps = {
  menuSelection: MenuSelection
  setMenuSelection: (sel: MenuSelection) => void
}

export const CategoryMenu = ({  menuSelection, setMenuSelection }: CategoryMenuProps) => {
  const menu = useMemo(() => menuFromFoods(), [])

  return (
    <nav className="category-menu" aria-label="Food categories">
      <button
        type="button"
        className={`category-menu__link ${menuSelection === "all" ? "is-active" : ""}`}
        onClick={() => setMenuSelection("all")}
      >
        All
      </button>

      {menu.map((cat) => (
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
  )
}
