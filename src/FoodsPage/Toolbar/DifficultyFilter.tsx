import "./DifficultyFilter.scss";

export type Difficulty = 1 | 2 | 3 | 4 | 5;

type DifficultyFilterProps = {
	onChange: (value: Difficulty | null) => void;
	value: Difficulty | null;
};

const OPTIONS: Difficulty[] = [1, 2, 3, 4, 5];

export const DifficultyFilter = ({
	onChange,
	value,
}: DifficultyFilterProps) => (
	<div className="difficulty-filter">
		<span className="difficulty-filter__label">Difficulty:</span>
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
	</div>
);
