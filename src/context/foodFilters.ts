import { createContext, useContext } from "react";

import { Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter.types";
import { SortDirection } from "../const/sortDirections.const";

type FoodFiltersContextValue = {
	difficulty: Difficulty | null;
	fuzzySearchEnabled: boolean;
	resetAll: () => void;
	search: string;
	setDifficulty: (value: Difficulty | null) => void;
	setFuzzySearchEnabled: (value: boolean) => void;
	setSearch: (value: string) => void;
	setSort: (value: SortDirection) => void;
	setSubCategory: (value: string | null) => void;
	sort: SortDirection;
	subCategory: string | null;
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
