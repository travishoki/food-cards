import { useEffect, useState } from "react";

import { Difficulty, DifficultyFilter } from "./DifficultyFilter";
import { FilterButton } from "./FilterButton";
import { LocationNav } from "./LocationNav/LocationNav";
import { SearchButton } from "./SearchButton";
import { SettingsButton } from "./SettingsButton";
import { SortButton } from "./SortButton";
import { SortPanel } from "./SortPanel";
import { CardViewToggle } from "../../CardViewToggle/CardViewToggle";
import { InStockToggle } from "../../CardViewToggle/InStockToggle";
import { PrereleaseToggle } from "../../CardViewToggle/PrereleaseToggle";
import { CategoryMenu } from "../../CategoryMenu/CategoryMenu";
import { Location, LOCATIONS } from "../../const/locations.const";
import {
	SORT_DIRECTIONS,
	SortDirection,
} from "../../const/sortDirections.const";
import { isEatingOut } from "../../helpers/locations.helpers";
import { CloseIcon } from "../../icons/CloseIcon";
import { SearchInput } from "../SearchInput/SearchInput";

import "./Toolbar.scss";

type Panel = "filter" | "search" | "settings" | "sort";

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
					hasActiveSort={sort !== SORT_DIRECTIONS.asc}
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
					<div className="tray-contents">
						{openPanel === "filter" && (
							<>
								<LocationNav />
								<CategoryMenu />
								{!isEatingOut(location) && (
									<DifficultyFilter
										onChange={onDifficultyChange}
										value={difficulty}
									/>
								)}
							</>
						)}
						{openPanel === "search" && (
							<SearchInput onClose={close} />
						)}
						{openPanel === "sort" && (
							<SortPanel
								onChange={onSortChange}
								showDifficultySort={location === LOCATIONS.home}
								value={sort}
							/>
						)}
						{openPanel === "settings" && (
							<>
								<CardViewToggle />
								<PrereleaseToggle />
								<InStockToggle />
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
