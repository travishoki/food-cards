import { FilterSection } from "../FilterSection/FilterSection";
import { PrereleaseMode, useCardView } from "../context/cardView";

import "./CardViewToggle.scss";

const OPTIONS: {
	label: string;
	value: PrereleaseMode;
}[] = [
	{ label: "Show", value: "show" },
	{ label: "Hide", value: "hide" },
	{ label: "Only", value: "only" },
];

export const PrereleaseToggle = () => {
	const { prereleaseMode, setPrereleaseMode } = useCardView();

	return (
		<FilterSection label="Prerelease:">
			{OPTIONS.map((opt) => (
				<button
					key={opt.value}
					aria-pressed={prereleaseMode === opt.value}
					className={`card-view-toggle__option ${prereleaseMode === opt.value ? "is-active" : ""}`}
					onClick={() => setPrereleaseMode(opt.value)}
					type="button"
				>
					{opt.label}
				</button>
			))}
		</FilterSection>
	);
};
