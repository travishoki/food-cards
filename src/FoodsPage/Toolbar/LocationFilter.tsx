import { FilterSection } from "../../FilterSection/FilterSection";
import {
	LOCATION_DATA,
	LOCATION_ORDER,
	Location,
} from "../../const/locations.const";

import "./DifficultyFilter.scss";

export type { Location };

type LocationFilterProps = {
	onChange: (value: Location | null) => void;
	value: Location | null;
};

type Option = {
	label: string;
	value: Location | null;
};

const OPTIONS: Option[] = LOCATION_ORDER.map((loc) => ({
	label: LOCATION_DATA[loc].label,
	value: loc,
}));

export const LocationFilter = ({ onChange, value }: LocationFilterProps) => (
	<FilterSection label="Location:">
		{OPTIONS.map((opt) => (
			<button
				key={opt.label}
				aria-pressed={value === opt.value}
				className={`difficulty-filter__option difficulty-filter__option--wide ${value === opt.value ? "is-active" : ""}`}
				onClick={() => onChange(opt.value)}
				type="button"
			>
				{opt.label}
			</button>
		))}
	</FilterSection>
);
