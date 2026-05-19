import { Badge } from "./Badge";
import { SearchIcon } from "../../icons/SearchIcon";

type SearchButtonProps = {
	hasActiveSearch: boolean;
	isOpen: boolean;
	onToggle: () => void;
};

export const SearchButton = ({
	hasActiveSearch,
	isOpen,
	onToggle,
}: SearchButtonProps) => (
	<button
		aria-expanded={isOpen}
		aria-label="Search foods"
		className="toolbar__button"
		onClick={onToggle}
		type="button"
	>
		<SearchIcon />
		{hasActiveSearch && <Badge />}
	</button>
);
