import { AiButton } from "./AiSearch/AiButton";
import { FilterButton } from "./FilterButton";
import { SearchButton } from "./SearchButton";
import { SettingsButton } from "./SettingsButton";
import { SortButton } from "./SortButton";
import {
	SORT_DIRECTIONS,
	SortDirection,
} from "../../const/sortDirections.const";

type Panel = "ai" | "filter" | "search" | "settings" | "sort";

type ToolbarButtonRowProps = {
	hasActiveFilter: boolean;
	hasActiveSearch: boolean;
	onToggle: (panel: Panel) => void;
	openPanel: Panel | null;
	sort: SortDirection;
};

export const ToolbarButtonRow = ({
	hasActiveFilter,
	hasActiveSearch,
	onToggle,
	openPanel,
	sort,
}: ToolbarButtonRowProps) => (
	<div className="toolbar__row">
		<FilterButton
			hasActiveFilter={hasActiveFilter}
			isOpen={openPanel === "filter"}
			onToggle={() => onToggle("filter")}
		/>
		<SearchButton
			hasActiveSearch={hasActiveSearch}
			isOpen={openPanel === "search"}
			onToggle={() => onToggle("search")}
		/>
		<SortButton
			hasActiveSort={sort !== SORT_DIRECTIONS.asc}
			isOpen={openPanel === "sort"}
			onToggle={() => onToggle("sort")}
		/>
		<SettingsButton
			isOpen={openPanel === "settings"}
			onToggle={() => onToggle("settings")}
		/>
		<AiButton isOpen={openPanel === "ai"} onToggle={() => onToggle("ai")} />
	</div>
);
