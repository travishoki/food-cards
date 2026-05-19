import { useEffect, useState } from "react";

import { Difficulty, DifficultyFilter } from "./DifficultyFilter";
import { FilterButton } from "./FilterButton";
import { SearchButton } from "./SearchButton";
import { SettingsButton } from "./SettingsButton";
import { SortButton } from "./SortButton";
import { SortDirection, SortPanel } from "./SortPanel";
import { CardViewToggle } from "../../CardViewToggle/CardViewToggle";
import { CategoryMenu } from "../../CategoryMenu/CategoryMenu";
import { CloseIcon } from "../../icons/CloseIcon";
import { SearchInput } from "../SearchInput/SearchInput";

import "./Toolbar.scss";

type Panel = "filter" | "search" | "settings" | "sort";

type ToolbarProps = {
	difficulty: Difficulty | null;
	hasActiveFilter: boolean;
	hasActiveSearch: boolean;
	onDebouncedSearchChange: (value: string) => void;
	onDifficultyChange: (value: Difficulty | null) => void;
	onSortChange: (dir: SortDirection) => void;
	searchResetKey?: string;
	sort: SortDirection;
};

export const Toolbar = ({
	difficulty,
	hasActiveFilter,
	hasActiveSearch,
	onDebouncedSearchChange,
	onDifficultyChange,
	onSortChange,
	searchResetKey,
	sort,
}: ToolbarProps) => {
	const [openPanel, setOpenPanel] = useState<Panel | null>(null);

	const toggle = (p: Panel) =>
		setOpenPanel((curr) => (curr === p ? null : p));

	const close = () => setOpenPanel(null);

	useEffect(() => {
		if (!openPanel) return;

		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") close();
		};

		window.addEventListener("keydown", onKey);

		return () => window.removeEventListener("keydown", onKey);
	}, [openPanel]);

	return (
		<div className="toolbar">
			<div className="toolbar__row">
				<FilterButton
					hasActiveFilter={hasActiveFilter}
					isOpen={openPanel === "filter"}
					onToggle={() => toggle("filter")}
				/>
				<SearchButton
					hasActiveSearch={hasActiveSearch}
					isOpen={openPanel === "search"}
					onToggle={() => toggle("search")}
				/>
				<SortButton
					hasActiveSort={sort === "desc"}
					isOpen={openPanel === "sort"}
					onToggle={() => toggle("sort")}
				/>
				<SettingsButton
					isOpen={openPanel === "settings"}
					onToggle={() => toggle("settings")}
				/>
			</div>
			{openPanel && (
				<div className="toolbar__tray">
					<button
						aria-label="Close"
						className="toolbar__close"
						onClick={close}
						type="button"
					>
						<CloseIcon />
					</button>
					{openPanel === "filter" && (
						<>
							<CategoryMenu />
							<DifficultyFilter
								onChange={onDifficultyChange}
								value={difficulty}
							/>
						</>
					)}
					{openPanel === "search" && (
						<SearchInput
							onClose={close}
							onDebouncedChange={onDebouncedSearchChange}
							resetKey={searchResetKey}
						/>
					)}
					{openPanel === "sort" && (
						<SortPanel onChange={onSortChange} value={sort} />
					)}
					{openPanel === "settings" && <CardViewToggle />}
				</div>
			)}
		</div>
	);
};
