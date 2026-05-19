import { Badge } from "./Badge";
import { FilterIcon } from "../../icons/FilterIcon";

type FilterButtonProps = {
	hasActiveFilter: boolean;
	isOpen: boolean;
	onToggle: () => void;
};

export const FilterButton = ({
	hasActiveFilter,
	isOpen,
	onToggle,
}: FilterButtonProps) => (
	<button
		aria-expanded={isOpen}
		aria-label="Filter foods by category"
		className="toolbar__button"
		onClick={onToggle}
		type="button"
	>
		<FilterIcon />
		{hasActiveFilter && <Badge />}
	</button>
);
