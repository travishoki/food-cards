import { ReactNode, useCallback, useState } from "react";

import { FoodFiltersContext } from "./foodFilters";
import { Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter.types";
import { SORT_DIRECTIONS, SortDirection } from "../const/sortDirections.const";

export const FoodFiltersProvider = ({ children }: { children: ReactNode }) => {
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState<SortDirection>(SORT_DIRECTIONS.asc);
	const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
	const [subCategory, setSubCategory] = useState<string | null>(null);
	const [fuzzySearchEnabled, setFuzzySearchEnabled] = useState(false);

	const resetAll = useCallback(() => {
		setSort(SORT_DIRECTIONS.asc);
		setDifficulty(null);
		setSubCategory(null);
		setSearch("");
	}, []);

	return (
		<FoodFiltersContext.Provider
			value={{
				difficulty,
				fuzzySearchEnabled,
				resetAll,
				search,
				setDifficulty,
				setFuzzySearchEnabled,
				setSearch,
				setSort,
				setSubCategory,
				sort,
				subCategory,
			}}
		>
			{children}
		</FoodFiltersContext.Provider>
	);
};
