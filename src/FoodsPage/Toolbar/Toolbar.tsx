import { useEffect, useState } from "react";

import { FilterButton } from "./FilterButton";
import { SearchButton } from "./SearchButton";
import { SettingsButton } from "./SettingsButton";
import { CardViewToggle } from "../../CardViewToggle/CardViewToggle";
import { CategoryMenu } from "../../CategoryMenu/CategoryMenu";
import { CloseIcon } from "../../icons/CloseIcon";
import { SearchInput } from "../SearchInput/SearchInput";

import "./Toolbar.scss";

type Panel = "filter" | "search" | "settings";

type ToolbarProps = {
	hasActiveFilter: boolean;
	hasActiveSearch: boolean;
	onDebouncedSearchChange: (value: string) => void;
	searchResetKey?: string;
};

export const Toolbar = ({
	hasActiveFilter,
	hasActiveSearch,
	onDebouncedSearchChange,
	searchResetKey,
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
					{openPanel === "filter" && <CategoryMenu />}
					{openPanel === "search" && (
						<SearchInput
							onClose={close}
							onDebouncedChange={onDebouncedSearchChange}
							resetKey={searchResetKey}
						/>
					)}
					{openPanel === "settings" && <CardViewToggle />}
				</div>
			)}
		</div>
	);
};
