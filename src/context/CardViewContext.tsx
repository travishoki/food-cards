import { ReactNode, useState } from "react";

import { CardViewContext, PrereleaseMode, ViewMode } from "./cardView";

export const CardViewProvider = ({ children }: { children: ReactNode }) => {
	const [viewMode, setViewMode] = useState<ViewMode>("full");
	const [prereleaseMode, setPrereleaseMode] =
		useState<PrereleaseMode>("hide");

	return (
		<CardViewContext.Provider
			value={{
				prereleaseMode,
				setPrereleaseMode,
				setViewMode,
				viewMode,
			}}
		>
			{children}
		</CardViewContext.Provider>
	);
};
