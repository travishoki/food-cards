import { createContext, ReactNode, useContext, useState } from "react";

type CardViewContextValue = {
	showFull: boolean;
	toggle: () => void;
};

const CardViewContext = createContext<CardViewContextValue | undefined>(
	undefined,
);

export const CardViewProvider = ({ children }: { children: ReactNode }) => {
	const [showFull, setShowFull] = useState(true);

	return (
		<CardViewContext.Provider
			value={{ showFull, toggle: () => setShowFull((v) => !v) }}
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
