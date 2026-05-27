import { useEffect, useMemo } from "react";

import { FilterSection } from "../../FilterSection/FilterSection";
import { TOP_CATEGORIES } from "../../const/categories";
import { LOCATIONS } from "../../const/locations.const";
import { useFoodFilters } from "../../context/foodFilters";
import { useUrlParams } from "../../hooks/useUrlParams";
import { subCategoriesForTop } from "../CategoryMenu.helpers";

export const SubMenu = () => {
	const { setSubCategory, subCategory } = useFoodFilters();
	const { urlLocation, urlTopCategory } = useUrlParams();
	const subMenu = useMemo(
		() => (urlTopCategory ? subCategoriesForTop(urlTopCategory) : []),
		[urlTopCategory],
	);

	const sweetHidden =
		urlTopCategory === TOP_CATEGORIES.sweets &&
		urlLocation !== LOCATIONS.home;

	useEffect(() => {
		if (sweetHidden) setSubCategory(null);
	}, [sweetHidden, setSubCategory]);

	if (subMenu.length <= 1) return null;
	if (sweetHidden) return null;

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
