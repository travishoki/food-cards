import {
	Difficulty,
	DIFFICULTY_FIVE,
	DIFFICULTY_FOUR,
	DIFFICULTY_ONE,
	DIFFICULTY_THREE,
	DIFFICULTY_TWO,
} from "./DifficultyFilter.types";
import { FilterSection } from "../../FilterSection/FilterSection";

export type { Difficulty };

import "./DifficultyFilter.scss";

type DifficultyFilterProps = {
	onChange: (value: Difficulty | null) => void;
	value: Difficulty | null;
};

const OPTIONS: Difficulty[] = [
	DIFFICULTY_ONE,
	DIFFICULTY_TWO,
	DIFFICULTY_THREE,
	DIFFICULTY_FOUR,
	DIFFICULTY_FIVE,
];

export const DifficultyFilter = ({
	onChange,
	value,
}: DifficultyFilterProps) => (
	<FilterSection label="Cooking Difficulty:">
		<button
			aria-pressed={value === null}
			className={`difficulty-filter__option difficulty-filter__option--all ${value === null ? "is-active" : ""}`}
			onClick={() => onChange(null)}
			type="button"
		>
			All
		</button>
		{OPTIONS.map((d) => (
			<button
				key={d}
				aria-pressed={value === d}
				className={`difficulty-filter__option ${value === d ? "is-active" : ""}`}
				onClick={() => onChange(value === d ? null : d)}
				type="button"
			>
				{d}
			</button>
		))}
	</FilterSection>
);
