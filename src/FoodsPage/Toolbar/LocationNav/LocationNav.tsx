import { useNavigate } from "react-router-dom";

import { FilterSection } from "../../../FilterSection/FilterSection";
import { TOP_CATEGORIES } from "../../../const/categories";
import {
	LOCATION_DATA,
	LOCATION_ORDER,
	LOCATIONS,
} from "../../../const/locations.const";
import { SORT_DIRECTIONS } from "../../../const/sortDirections.const";
import { useFoodFilters } from "../../../context/foodFilters";
import { useUrlParams } from "../../../hooks/useUrlParams";

export const LocationNav = () => {
	const { urlLocation, urlTopCategory } = useUrlParams();
	const { setSort, setSubCategory, sort } = useFoodFilters();
	const navigate = useNavigate();

	const handleClick = (loc: string) => {
		if (urlTopCategory === TOP_CATEGORIES.sweets) setSubCategory(null);
		if (loc !== LOCATIONS.home && sort === SORT_DIRECTIONS.difficultyAsc)
			setSort(SORT_DIRECTIONS.asc);

		const isHome = loc === LOCATIONS.home;
		const categoryAllowedAtLoc =
			isHome || urlTopCategory !== TOP_CATEGORIES.snack;
		const keepCategory = urlTopCategory !== null && categoryAllowedAtLoc;

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
