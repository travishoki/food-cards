import { useMemo } from "react";

import { FilterSection } from "../../FilterSection/FilterSection";
import { useFoodFilters } from "../../context/foodFilters";
import { subCategoriesForTop } from "../CategoryMenu.helpers";

export const SubMenu = () => {
	const { setSubCategory, subCategory, topCategory } = useFoodFilters();
	const subMenu = useMemo(
		() => (topCategory ? subCategoriesForTop(topCategory) : []),
		[topCategory],
	);

	if (subMenu.length <= 1) return null;

	return (
		<FilterSection ariaLabel="Food subcategories" label="Subcategory:">
			<button
				className={`category-menu__link ${!subCategory ? "is-active" : ""}`}
				onClick={() => setSubCategory(null)}
				type="button"
			>
				All
			</button>
			{subMenu.map((cat) => (
				<button
					key={cat.key}
					className={`category-menu__link ${subCategory === cat.key ? "is-active" : ""}`}
					onClick={() => setSubCategory(cat.key)}
					type="button"
				>
					{cat.label}
				</button>
			))}
		</FilterSection>
	);
};
