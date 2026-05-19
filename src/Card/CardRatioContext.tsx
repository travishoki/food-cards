import { createContext, ReactNode, useContext } from "react";

const CardRatioContext = createContext<number | undefined>(undefined);

export const CardRatioProvider = ({
	children,
	value,
}: {
	children: ReactNode;
	value: number;
}) => (
	<CardRatioContext.Provider value={value}>
		{children}
	</CardRatioContext.Provider>
);

export const useCardRatio = () => {
	const ratio = useContext(CardRatioContext);

	if (ratio === undefined)
		throw new Error("useCardRatio must be used within CardRatioProvider");

	return ratio;
};
