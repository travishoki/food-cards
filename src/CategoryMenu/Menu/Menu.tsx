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

	const handleAllClick = () => {
		navigate(urlLocation === LOCATIONS.home ? "/" : `/${urlLocation}`);
	};

	const handleClick = (catKey: string) => {
		if (urlLocation === LOCATIONS.home) {
			navigate(`/${catKey}`);
		} else {
			navigate(`/${urlLocation}/${catKey}`);
		}
	};

	return (
		<FilterSection ariaLabel="Food categories" label="Category:">
			<button
				className={`category-menu__link ${urlTopCategory === null ? "is-active" : ""}`}
				onClick={handleAllClick}
				type="button"
			>
				All
			</button>
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
