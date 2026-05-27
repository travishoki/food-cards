import { useMemo } from "react";

import { FilterSection } from "../../FilterSection/FilterSection";
import { useFoodFilters } from "../../context/foodFilters";
import { topMenuItems } from "../CategoryMenu.helpers";

export const Menu = () => {
	const { setTopCategory, topCategory } = useFoodFilters();
	const topMenu = useMemo(() => topMenuItems(), []);

	return (
		<FilterSection ariaLabel="Food categories" label="Category:">
			<button
				className={`category-menu__link ${!topCategory ? "is-active" : ""}`}
				onClick={() => setTopCategory(null)}
				type="button"
			>
				All
			</button>
			{topMenu.map((cat) => (
				<button
					key={cat.key}
					className={`category-menu__link ${topCategory === cat.key ? "is-active" : ""}`}
					onClick={() => setTopCategory(cat.key)}
					type="button"
				>
					{cat.label}
				</button>
			))}
		</FilterSection>
	);
};
