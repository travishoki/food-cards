import { useParams } from "react-router-dom";

import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { useFoodFilters } from "../context/foodFilters";
import { BackToTop } from "./BackToTop/BackToTop";
import { FoodList } from "./FoodList/FoodList";
import { Toolbar } from "./Toolbar/Toolbar";
import { TOP_CATEGORIES } from "../const/categories";
import { LOCATIONS, Location } from "../const/locations.const";

export const FoodsPage = () => {
	const { location } = useParams<{ location: string }>();

	const {
		difficulty,
		search,
		setDifficulty,
		setSearch,
		setSort,
		sort,
		subCategory,
		topCategory,
	} = useFoodFilters();

	const urlLocation = (location ?? LOCATIONS.home) as Location;

	return (
		<>
			<Toolbar
				difficulty={difficulty}
				hasActiveFilter={
					urlLocation !== LOCATIONS.home ||
					topCategory !== TOP_CATEGORIES.main ||
					!!subCategory ||
					difficulty !== null
				}
				hasActiveSearch={!!search.trim()}
				location={urlLocation}
				onDifficultyChange={setDifficulty}
				onSortChange={setSort}
				sort={sort}
			/>
			<ErrorBoundary>
				<FoodList
					difficulty={difficulty}
					location={urlLocation}
					onClearDifficulty={() => setDifficulty(null)}
					onClearSearch={() => setSearch("")}
					search={search}
					sort={sort}
					subCategory={subCategory ?? undefined}
					topCategory={topCategory ?? undefined}
				/>
			</ErrorBoundary>
			<BackToTop />
		</>
	);
};
