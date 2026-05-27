import { ReactNode, useCallback, useState } from "react";

import { FoodFiltersContext } from "./foodFilters";
import { Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter";
import { SortDirection } from "../FoodsPage/Toolbar/SortPanel";
import { TOP_CATEGORIES } from "../const/categories";

export const FoodFiltersProvider = ({ children }: { children: ReactNode }) => {
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState<SortDirection>("asc");
	const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
	const [topCategory, setTopCategory] = useState<string | null>(
		TOP_CATEGORIES.main,
	);
	const [subCategory, setSubCategory] = useState<string | null>(null);

	const handleSetTopCategory = useCallback((value: string | null) => {
		setTopCategory(value);
		setSubCategory(null);
	}, []);

	const resetAll = useCallback(() => {
		setSort("asc");
		setDifficulty(null);
		setTopCategory(TOP_CATEGORIES.main);
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
				setTopCategory: handleSetTopCategory,
				sort,
				subCategory,
				topCategory,
			}}
		>
			{children}
		</FoodFiltersContext.Provider>
	);
};
