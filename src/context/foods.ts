import { createContext, useContext } from "react";

import type { Food } from "../types";
import type { Dictionary } from "lodash";

type FoodsContextValue = {
	error: string | null;
	foodActivityDictionary: Dictionary<Food>;
	loading: boolean;
	setFoodInStock: (slug: string, inStock: boolean) => void;
};

export const FoodsContext = createContext<FoodsContextValue>({
	error: null,
	foodActivityDictionary: {},
	loading: true,
	setFoodInStock: () => {},
});

export const useFoodsContext = (): FoodsContextValue =>
	useContext(FoodsContext);
