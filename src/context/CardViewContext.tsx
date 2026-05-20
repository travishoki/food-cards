import { createContext, ReactNode, useContext, useState } from "react";

export type ViewMode = "full" | "image" | "titles";
export type PrereleaseMode = "show" | "hide" | "only";

type CardViewContextValue = {
	prereleaseMode: PrereleaseMode;
	setPrereleaseMode: (value: PrereleaseMode) => void;
	setViewMode: (value: ViewMode) => void;
	viewMode: ViewMode;
};

const CardViewContext = createContext<CardViewContextValue | undefined>(
	undefined,
);

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

export const useCardView = () => {
	const ctx = useContext(CardViewContext);

	if (!ctx)
		throw new Error("useCardView must be used within CardViewProvider");

	return ctx;
};
