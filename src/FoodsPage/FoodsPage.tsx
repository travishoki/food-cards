import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { LOCATIONS } from "../const/locations.const";
import { useFoodFilters } from "../context/foodFilters";
import { useUrlParams } from "../hooks/useUrlParams";
import { BackToTop } from "./BackToTop/BackToTop";
import { FoodList } from "./FoodList/FoodList";
import { Toolbar } from "./Toolbar/Toolbar";

export const FoodsPage = () => {
	const { urlLocation, urlTopCategory } = useUrlParams();

	const {
		difficulty,
		search,
		setDifficulty,
		setSearch,
		setSort,
		sort,
		subCategory,
	} = useFoodFilters();

	return (
		<>
			<Toolbar
				difficulty={difficulty}
				hasActiveFilter={
					urlLocation !== LOCATIONS.home ||
					urlTopCategory !== null ||
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
					onSearchSuggestion={setSearch}
					search={search}
					sort={sort}
					subCategory={subCategory ?? undefined}
					topCategory={urlTopCategory ?? undefined}
				/>
			</ErrorBoundary>
			<BackToTop />
		</>
	);
};
