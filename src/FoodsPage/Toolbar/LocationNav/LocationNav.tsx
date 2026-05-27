import { useNavigate } from "react-router-dom";

import { FilterSection } from "../../../FilterSection/FilterSection";
import { TOP_CATEGORIES } from "../../../const/categories";
import {
	LOCATION_DATA,
	LOCATION_ORDER,
	LOCATIONS,
} from "../../../const/locations.const";
import { useFoodFilters } from "../../../context/foodFilters";
import { useUrlParams } from "../../../hooks/useUrlParams";

export const LocationNav = () => {
	const { urlLocation, urlTopCategory } = useUrlParams();
	const { setSubCategory } = useFoodFilters();
	const navigate = useNavigate();

	const handleClick = (loc: string) => {
		setSubCategory(null);

		const isHome = loc === LOCATIONS.home;
		const categoryAllowedAtLoc =
			isHome || urlTopCategory !== TOP_CATEGORIES.snack;
		const keepCategory =
			urlTopCategory !== TOP_CATEGORIES.main && categoryAllowedAtLoc;

		if (isHome) {
			navigate(keepCategory ? `/${urlTopCategory}` : "/");
		} else {
			navigate(keepCategory ? `/${loc}/${urlTopCategory}` : `/${loc}`);
		}
	};

	return (
		<FilterSection label="Location:">
			{LOCATION_ORDER.map((loc) => (
				<button
					key={loc}
					className={`difficulty-filter__option difficulty-filter__option--wide ${urlLocation === loc ? "is-active" : ""}`}
					onClick={() => handleClick(loc)}
					type="button"
				>
					{LOCATION_DATA[loc].label}
				</button>
			))}
		</FilterSection>
	);
};
