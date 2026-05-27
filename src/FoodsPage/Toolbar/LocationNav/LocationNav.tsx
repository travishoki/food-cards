import { useParams, useNavigate } from "react-router-dom";

import { FilterSection } from "../../../FilterSection/FilterSection";
import {
	LOCATION_DATA,
	LOCATION_ORDER,
	LOCATIONS,
} from "../../../const/locations.const";

export const LocationNav = () => {
	const { location } = useParams<{ location?: string }>();
	const navigate = useNavigate();

	const activeLocation = location ?? LOCATIONS.home;

	return (
		<FilterSection label="Location:">
			{LOCATION_ORDER.map((loc) => (
				<button
					key={loc}
					className={`difficulty-filter__option difficulty-filter__option--wide ${activeLocation === loc ? "is-active" : ""}`}
					onClick={() =>
						navigate(loc === LOCATIONS.home ? "/" : `/${loc}`)
					}
					type="button"
				>
					{LOCATION_DATA[loc].label}
				</button>
			))}
		</FilterSection>
	);
};
