import { ReactNode, useCallback, useState } from "react";

import {
	CardViewContext,
	InStockMode,
	PrereleaseMode,
	ViewMode,
} from "./cardView";

export const CardViewProvider = ({ children }: { children: ReactNode }) => {
	const [viewMode, setViewMode] = useState<ViewMode>("full");
	const [prereleaseMode, setPrereleaseMode] =
		useState<PrereleaseMode>("hide");
	const [inStockMode, setInStockMode] = useState<InStockMode>("show");

	const resetAll = useCallback(() => {
		setViewMode("full");
		setPrereleaseMode("hide");
		setInStockMode("show");
	}, []);

	return (
		<CardViewContext.Provider
			value={{
				inStockMode,
				prereleaseMode,
				resetAll,
				setInStockMode,
				setPrereleaseMode,
				setViewMode,
				viewMode,
			}}
		>
			{children}
		</CardViewContext.Provider>
	);
};
