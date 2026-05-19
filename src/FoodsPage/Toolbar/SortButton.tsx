import { Badge } from "./Badge";
import { SortIcon } from "../../icons/SortIcon";

type SortButtonProps = {
	hasActiveSort: boolean;
	isOpen: boolean;
	onToggle: () => void;
};

export const SortButton = ({
	hasActiveSort,
	isOpen,
	onToggle,
}: SortButtonProps) => (
	<button
		aria-expanded={isOpen}
		aria-label="Sort foods"
		className="toolbar__button"
		onClick={onToggle}
		type="button"
	>
		<SortIcon />
		{hasActiveSort && <Badge />}
	</button>
);
