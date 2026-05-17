import { useMemo } from "react"
import { useParams } from "react-router-dom"
import { subCategoriesForTop } from "./CategoryMenu.helpers"
import { Menu } from "./Menu/Menu"
import { SubMenu } from "./Subcategory/SubMenu"
import "./CategoryMenu.css"

export const CategoryMenu = () => {
    return (
        <>
            <Menu />
            <SubMenu />
        </>
    )
}
