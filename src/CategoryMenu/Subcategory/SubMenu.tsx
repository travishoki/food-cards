import { useMemo } from "react";

import { FilterSection } from "../../FilterSection/FilterSection";
import { useFoodFilters } from "../../context/foodFilters";
import { useUrlParams } from "../../hooks/useUrlParams";
import { subCategoriesForTop } from "../CategoryMenu.helpers";

export const SubMenu = () => {
	const { setSubCategory, subCategory } = useFoodFilters();
	const { urlTopCategory } = useUrlParams();
	const subMenu = useMemo(
		() => (urlTopCategory ? subCategoriesForTop(urlTopCategory) : []),
		[urlTopCategory],
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
