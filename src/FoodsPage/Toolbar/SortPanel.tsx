import { FilterSection } from "../../FilterSection/FilterSection";

import "./SortPanel.scss";

export type SortDirection = "asc" | "desc";

type SortPanelProps = {
	onChange: (dir: SortDirection) => void;
	value: SortDirection;
};

const OPTIONS: {
	dir: SortDirection;
	label: string;
}[] = [
	{ dir: "asc", label: "A → Z" },
	{ dir: "desc", label: "Z → A" },
];

export const SortPanel = ({ onChange, value }: SortPanelProps) => (
	<FilterSection label="Sort:">
		{OPTIONS.map((opt) => (
			<button
				key={opt.dir}
				aria-pressed={value === opt.dir}
				className={`sort-panel__option ${value === opt.dir ? "is-active" : ""}`}
				onClick={() => onChange(opt.dir)}
				type="button"
			>
				{opt.label}
			</button>
		))}
	</FilterSection>
);
