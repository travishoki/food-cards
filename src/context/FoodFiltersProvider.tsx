import { ReactNode, useCallback, useState } from "react";

import { FoodFiltersContext } from "./foodFilters";
import { Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter";
import { SORT_DIRECTIONS, SortDirection } from "../FoodsPage/Toolbar/SortPanel";

export const FoodFiltersProvider = ({ children }: { children: ReactNode }) => {
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState<SortDirection>(SORT_DIRECTIONS.asc);
	const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
	const [subCategory, setSubCategory] = useState<string | null>(null);

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
				resetAll,
				search,
				setDifficulty,
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
