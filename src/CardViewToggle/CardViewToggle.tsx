import { FilterSection } from "../FilterSection/FilterSection";
import { useCardView, ViewMode } from "../context/CardViewContext";

import "./CardViewToggle.scss";

const OPTIONS: {
	label: string;
	value: ViewMode;
}[] = [
	{ label: "Full Card", value: "full" },
	{ label: "Image Only", value: "image" },
	{ label: "Titles Only", value: "titles" },
];

export const CardViewToggle = () => {
	const { setViewMode, viewMode } = useCardView();

	return (
		<FilterSection label="View:">
			{OPTIONS.map((opt) => (
				<button
					key={opt.value}
					aria-pressed={viewMode === opt.value}
					className={`card-view-toggle__option ${viewMode === opt.value ? "is-active" : ""}`}
					onClick={() => setViewMode(opt.value)}
					type="button"
				>
					{opt.label}
				</button>
			))}
		</FilterSection>
	);
};
