import { OPTIONS } from "./InStockToggle.const";
import { FilterSection } from "../FilterSection/FilterSection";
import { useCardView } from "../context/cardView";

import "./CardViewToggle.scss";

export const InStockFilterToggle = () => {
	const { inStockMode, setInStockMode } = useCardView();

	return (
		<FilterSection label="Out of Stock:">
			{OPTIONS.map((opt) => (
				<button
					key={opt.value}
					aria-pressed={inStockMode === opt.value}
					className={`card-view-toggle__option ${inStockMode === opt.value ? "is-active" : ""}`}
					onClick={() => setInStockMode(opt.value)}
					type="button"
				>
					{opt.label}
				</button>
			))}
		</FilterSection>
	);
};
