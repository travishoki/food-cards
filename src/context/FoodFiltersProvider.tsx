import { ReactNode, useCallback, useState } from "react";

import { FoodFiltersContext } from "./foodFilters";
import { Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter";
import { SortDirection } from "../FoodsPage/Toolbar/SortPanel";
import { LOCATIONS, Location } from "../const/locations.const";
import { isEatingOut } from "../helpers/locations.helpers";

export const FoodFiltersProvider = ({ children }: { children: ReactNode }) => {
	const [search, setSearch] = useState("");
	const [sort, setSort] = useState<SortDirection>("asc");
	const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
	const [location, setLocation] = useState<Location | null>(LOCATIONS.home);

	const handleLocationChange = useCallback((value: Location | null) => {
		setLocation(value);

		if (isEatingOut(value)) {
			setDifficulty(null);
		}
	}, []);

	const resetAll = useCallback(() => {
		setSort("asc");
		setDifficulty(null);
		setLocation(LOCATIONS.home);
		setSearch("");
	}, []);

	return (
		<FoodFiltersContext.Provider
			value={{
				difficulty,
				location,
				resetAll,
				search,
				setDifficulty,
				setLocation: handleLocationChange,
				setSearch,
				setSort,
				sort,
			}}
		>
			{children}
		</FoodFiltersContext.Provider>
	);
};
