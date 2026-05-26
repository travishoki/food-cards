import type { ReactNode } from "react";

import { FoodsContext } from "./foods";
import { useFoods } from "../hooks/useFoods";

export const FoodsProvider = ({ children }: { children: ReactNode }) => {
	const value = useFoods();

	return (
		<FoodsContext.Provider value={value}>{children}</FoodsContext.Provider>
	);
};
