import { AiSearchInput } from "./AiSearch/AiSearchInput";
import { DifficultyFilter } from "./DifficultyFilter";
import { Difficulty } from "./DifficultyFilter.types";
import { LocationNav } from "./LocationNav/LocationNav";
import { SortPanel } from "./SortPanel";
import { CardViewToggle } from "../../CardViewToggle/CardViewToggle";
import { InStockFilterToggle } from "../../CardViewToggle/InStockFilterToggle";
import { PrereleaseToggle } from "../../CardViewToggle/PrereleaseToggle";
import { CategoryMenu } from "../../CategoryMenu/CategoryMenu";
import { Location, LOCATIONS } from "../../const/locations.const";
import { SortDirection } from "../../const/sortDirections.const";
import { isEatingOut } from "../../helpers/locations.helpers";
import { CloseIcon } from "../../icons/CloseIcon";
import { SearchInput } from "../SearchInput/SearchInput";

type Panel = "ai" | "filter" | "search" | "settings" | "sort";

type ToolbarTrayProps = {
	difficulty: Difficulty | null;
	location: Location | null;
	onClose: () => void;
	onDifficultyChange: (value: Difficulty | null) => void;
	onSortChange: (dir: SortDirection) => void;
	openPanel: Panel;
	sort: SortDirection;
};

export const ToolbarTray = ({
	difficulty,
	location,
	onClose,
	onDifficultyChange,
	onSortChange,
	openPanel,
	sort,
}: ToolbarTrayProps) => (
	<div className="toolbar__tray">
		<button
			aria-label="Close"
			className="toolbar__close"
			onClick={onClose}
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
			{openPanel === "search" && <SearchInput onClose={onClose} />}
			{openPanel === "sort" && (
				<SortPanel
					onChange={onSortChange}
					showDifficultySort={location === LOCATIONS.home}
					value={sort}
				/>
			)}
			{openPanel === "ai" && <AiSearchInput onClose={onClose} />}
			{openPanel === "settings" && (
				<>
					<CardViewToggle />
					<PrereleaseToggle />
					<InStockFilterToggle />
				</>
			)}
		</div>
	</div>
);
