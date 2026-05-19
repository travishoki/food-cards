import { createContext, ReactNode, useContext } from "react";

type CardContextValue = {
	cardHeight: number;
	cardRatio: number;
	cardWidth: number;
};

const CardContext = createContext<CardContextValue | undefined>(undefined);

export const CardProvider = ({
	children,
	value,
}: {
	children: ReactNode;
	value: CardContextValue;
}) => <CardContext.Provider value={value}>{children}</CardContext.Provider>;

export const useCard = () => {
	const ctx = useContext(CardContext);

	if (!ctx) throw new Error("useCard must be used within CardProvider");

	return ctx;
};

export const useCardRatio = () => useCard().cardRatio;
