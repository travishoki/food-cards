import { useMemo } from "react";

import { useNavigate } from "react-router-dom";

import { FilterSection } from "../../FilterSection/FilterSection";
import { TOP_CATEGORIES } from "../../const/categories";
import { LOCATIONS } from "../../const/locations.const";
import { useUrlParams } from "../../hooks/useUrlParams";
import { topMenuItems } from "../CategoryMenu.helpers";

export const Menu = () => {
	const { urlLocation, urlTopCategory } = useUrlParams();
	const navigate = useNavigate();
	const topMenu = useMemo(() => topMenuItems(), []);

	const handleClick = (catKey: string) => {
		const isMain = catKey === TOP_CATEGORIES.main;

		if (urlLocation === LOCATIONS.home) {
			navigate(isMain ? "/" : `/${catKey}`);
		} else {
			navigate(isMain ? `/${urlLocation}` : `/${urlLocation}/${catKey}`);
		}
	};

	return (
		<FilterSection ariaLabel="Food categories" label="Category:">
			{topMenu.map((cat) => {
				if (
					urlLocation !== LOCATIONS.home &&
					cat.key === TOP_CATEGORIES.snack
				)
					return null;

				return (
					<button
						key={cat.key}
						className={`category-menu__link ${urlTopCategory === cat.key ? "is-active" : ""}`}
						onClick={() => handleClick(cat.key)}
						type="button"
					>
						{cat.label}
					</button>
				);
			})}
		</FilterSection>
	);
};
