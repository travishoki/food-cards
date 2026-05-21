import { useCallback, useState } from "react";

import { useParams } from "react-router-dom";

import { LOCATIONS } from "../data/locations.const";
import { isEatingOut } from "../data/locations.helpers";
import { BackToTop } from "./BackToTop/BackToTop";
import { FoodList } from "./FoodList/FoodList";
import { Difficulty } from "./Toolbar/DifficultyFilter";
import { Location } from "./Toolbar/LocationFilter";
import { SortDirection } from "./Toolbar/SortPanel";
import { Toolbar } from "./Toolbar/Toolbar";

export const FoodsPage = () => {
	const { subCategory, topCategory } = useParams<{
		subCategory?: string;
		topCategory?: string;
	}>();

	const [debouncedSearch, setDebouncedSearch] = useState("");
	const [clearCount, setClearCount] = useState(0);
	const [sort, setSort] = useState<SortDirection>("asc");
	const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
	const [location, setLocation] = useState<Location | null>(LOCATIONS.home);

	const handleDebouncedChange = useCallback(
		(value: string) => setDebouncedSearch(value),
		[],
	);

	const handleClearSearch = useCallback(
		() => setClearCount((c) => c + 1),
		[],
	);

	const handleLocationChange = useCallback((value: Location | null) => {
		setLocation(value);

		if (isEatingOut(value)) {
			setDifficulty(null);
		}
	}, []);

	return (
		<>
			<Toolbar
				difficulty={difficulty}
				hasActiveFilter={
					!!topCategory ||
					!!subCategory ||
					difficulty !== null ||
					location !== LOCATIONS.home
				}
				hasActiveSearch={!!debouncedSearch.trim()}
				location={location}
				onDebouncedSearchChange={handleDebouncedChange}
				onDifficultyChange={setDifficulty}
				onLocationChange={handleLocationChange}
				onSortChange={setSort}
				searchResetKey={String(clearCount)}
				sort={sort}
			/>
			<FoodList
				difficulty={difficulty}
				location={location}
				onClearDifficulty={() => setDifficulty(null)}
				onClearLocation={() => setLocation(null)}
				onClearSearch={handleClearSearch}
				search={debouncedSearch}
				sort={sort}
				subCategory={subCategory}
				topCategory={topCategory}
			/>
			<BackToTop />
		</>
	);
};
