import { createContext, useContext } from "react";

export type ViewMode = "full" | "image" | "titles";
export type PrereleaseMode = "show" | "hide" | "only";
export type InStockMode = "show" | "hide" | "only";

type CardViewContextValue = {
	inStockMode: InStockMode;
	prereleaseMode: PrereleaseMode;
	resetAll: () => void;
	setInStockMode: (value: InStockMode) => void;
	setPrereleaseMode: (value: PrereleaseMode) => void;
	setViewMode: (value: ViewMode) => void;
	viewMode: ViewMode;
};

export const CardViewContext = createContext<CardViewContextValue | undefined>(
	undefined,
);

export const useCardView = () => {
	const ctx = useContext(CardViewContext);

	if (!ctx)
		throw new Error("useCardView must be used within CardViewProvider");

	return ctx;
};
