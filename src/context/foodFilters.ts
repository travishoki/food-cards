import { createContext, useContext } from "react";

import { Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter";
import { SortDirection } from "../FoodsPage/Toolbar/SortPanel";
import { Location } from "../const/locations.const";

type FoodFiltersContextValue = {
	difficulty: Difficulty | null;
	location: Location | null;
	resetAll: () => void;
	search: string;
	setDifficulty: (value: Difficulty | null) => void;
	setLocation: (value: Location | null) => void;
	setSearch: (value: string) => void;
	setSort: (value: SortDirection) => void;
	sort: SortDirection;
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
