import { createContext, useContext } from "react";

import { Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter";
import { SortDirection } from "../FoodsPage/Toolbar/SortPanel";

type FoodFiltersContextValue = {
	difficulty: Difficulty | null;
	resetAll: () => void;
	search: string;
	setDifficulty: (value: Difficulty | null) => void;
	setSearch: (value: string) => void;
	setSort: (value: SortDirection) => void;
	setSubCategory: (value: string | null) => void;
	setTopCategory: (value: string | null) => void;
	sort: SortDirection;
	subCategory: string | null;
	topCategory: string | null;
};

export const FoodFiltersContext = createContext<
	FoodFiltersContextValue | undefined
>(undefined);

export const useFoodFilters = () => {
	const ctx = useContext(FoodFiltersContext);

	if (!ctx)
		throw new Error(
			"useFoodFilters must be used within FoodFiltersProvider",
		);

	return ctx;
};
