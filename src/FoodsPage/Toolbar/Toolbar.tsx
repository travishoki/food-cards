import { useEffect, useState } from "react";

import { CardViewToggle } from "../../CardViewToggle/CardViewToggle";
import { CategoryMenu } from "../../CategoryMenu/CategoryMenu";
import { CloseIcon } from "../../icons/CloseIcon";
import { FilterIcon } from "../../icons/FilterIcon";
import { GearIcon } from "../../icons/GearIcon";
import { SearchIcon } from "../../icons/SearchIcon";
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
				<button
					aria-expanded={openPanel === "filter"}
					aria-label="Filter foods by category"
					className="toolbar__button"
					onClick={() => toggle("filter")}
					type="button"
				>
					<FilterIcon />
					{hasActiveFilter && (
						<span aria-hidden className="toolbar__badge" />
					)}
				</button>
				<button
					aria-expanded={openPanel === "search"}
					aria-label="Search foods"
					className="toolbar__button"
					onClick={() => toggle("search")}
					type="button"
				>
					<SearchIcon />
					{hasActiveSearch && (
						<span aria-hidden className="toolbar__badge" />
					)}
				</button>
				<button
					aria-expanded={openPanel === "settings"}
					aria-label="View settings"
					className="toolbar__button"
					onClick={() => toggle("settings")}
					type="button"
				>
					<GearIcon />
				</button>
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
