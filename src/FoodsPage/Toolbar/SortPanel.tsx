import { FilterSection } from "../../FilterSection/FilterSection";

import "./SortPanel.scss";

export const SORT_DIRECTIONS = {
	asc: "asc",
	desc: "desc",
	difficultyAsc: "difficulty-asc",
} as const;

export type SortDirection =
	(typeof SORT_DIRECTIONS)[keyof typeof SORT_DIRECTIONS];

type SortPanelProps = {
	onChange: (dir: SortDirection) => void;
	showDifficultySort: boolean;
	value: SortDirection;
};

const OPTIONS: { dir: SortDirection; label: string }[] = [
	{ dir: SORT_DIRECTIONS.asc, label: "A → Z" },
	{ dir: SORT_DIRECTIONS.desc, label: "Z → A" },
	{ dir: SORT_DIRECTIONS.difficultyAsc, label: "Easy → Hard" },
];

export const SortPanel = ({
	onChange,
	showDifficultySort,
	value,
}: SortPanelProps) => (
	<FilterSection label="Sort:">
		{OPTIONS.map((opt) => {
			if (
				opt.dir === SORT_DIRECTIONS.difficultyAsc &&
				!showDifficultySort
			)
				return null;

			return (
				<button
					key={opt.dir}
					aria-pressed={value === opt.dir}
					className={`sort-panel__option ${value === opt.dir ? "is-active" : ""}`}
					onClick={() => onChange(opt.dir)}
					type="button"
				>
					{opt.label}
				</button>
			);
		})}
	</FilterSection>
);
