import { Difficulty } from "./DifficultyFilter.types";
import { useToolbarPanel } from "./Toolbar.hooks";
import { ToolbarButtonRow } from "./ToolbarButtonRow";
import { ToolbarTray } from "./ToolbarTray";
import { Location } from "../../const/locations.const";
import { SortDirection } from "../../const/sortDirections.const";

import "./Toolbar.scss";

type ToolbarProps = {
	difficulty: Difficulty | null;
	hasActiveFilter: boolean;
	hasActiveSearch: boolean;
	location: Location | null;
	onDifficultyChange: (value: Difficulty | null) => void;
	onSortChange: (dir: SortDirection) => void;
	sort: SortDirection;
};

export const Toolbar = ({
	difficulty,
	hasActiveFilter,
	hasActiveSearch,
	location,
	onDifficultyChange,
	onSortChange,
	sort,
}: ToolbarProps) => {
	const { close, openPanel, toggle } = useToolbarPanel();

	return (
		<div className="toolbar">
			<ToolbarButtonRow
				hasActiveFilter={hasActiveFilter}
				hasActiveSearch={hasActiveSearch}
				onToggle={toggle}
				openPanel={openPanel}
				sort={sort}
			/>
			{openPanel && (
				<ToolbarTray
					difficulty={difficulty}
					location={location}
					onClose={close}
					onDifficultyChange={onDifficultyChange}
					onSortChange={onSortChange}
					openPanel={openPanel}
					sort={sort}
				/>
			)}
		</div>
	);
};
