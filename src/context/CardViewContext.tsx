import { ReactNode, useCallback, useState } from "react";

import { CardViewContext, PrereleaseMode, ViewMode } from "./cardView";

export const CardViewProvider = ({ children }: { children: ReactNode }) => {
	const [viewMode, setViewMode] = useState<ViewMode>("full");
	const [prereleaseMode, setPrereleaseMode] =
		useState<PrereleaseMode>("hide");

	const resetAll = useCallback(() => {
		setViewMode("full");
		setPrereleaseMode("hide");
	}, []);

	return (
		<CardViewContext.Provider
			value={{
				prereleaseMode,
				resetAll,
				setPrereleaseMode,
				setViewMode,
				viewMode,
			}}
		>
			{children}
		</CardViewContext.Provider>
	);
};
