import { createContext, ReactNode, useContext, useState } from "react";

export type ViewMode = "full" | "image" | "titles";

type CardViewContextValue = {
	setShowPrerelease: (value: boolean) => void;
	setViewMode: (value: ViewMode) => void;
	showPrerelease: boolean;
	viewMode: ViewMode;
};

const CardViewContext = createContext<CardViewContextValue | undefined>(
	undefined,
);

export const CardViewProvider = ({ children }: { children: ReactNode }) => {
	const [viewMode, setViewMode] = useState<ViewMode>("full");
	const [showPrerelease, setShowPrerelease] = useState(false);

	return (
		<CardViewContext.Provider
			value={{
				setShowPrerelease,
				setViewMode,
				showPrerelease,
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
