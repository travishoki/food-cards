import "./DifficultyFilter.scss";

export type Location = "home" | "fast-food" | "restaurant";

type LocationFilterProps = {
	onChange: (value: Location | null) => void;
	value: Location | null;
};

const OPTIONS: { label: string; value: Location | null }[] = [
	{ label: "All", value: null },
	{ label: "Home", value: "home" },
	{ label: "Fast Food", value: "fast-food" },
	{ label: "Restaurant", value: "restaurant" },
];

export const LocationFilter = ({ onChange, value }: LocationFilterProps) => (
	<div className="difficulty-filter">
		<span className="difficulty-filter__label">Location:</span>
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
	</div>
);
