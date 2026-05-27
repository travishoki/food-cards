import { useParams } from "react-router-dom";

import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary";
import { CATEGORIES, TOP_CATEGORIES } from "../const/categories";
import { LOCATIONS } from "../const/locations.const";
import { useFoodFilters } from "../context/foodFilters";
import { BackToTop } from "./BackToTop/BackToTop";
import { FoodList } from "./FoodList/FoodList";
import { Toolbar } from "./Toolbar/Toolbar";

export const FoodsPage = () => {
	const { subCategory, topCategory } = useParams<{
		subCategory?: string;
		topCategory?: string;
	}>();

	const {
		difficulty,
		location,
		search,
		setDifficulty,
		setLocation,
		setSearch,
		setSort,
		sort,
	} = useFoodFilters();

	return (
		<>
			<Toolbar
				difficulty={difficulty}
				hasActiveFilter={
					(!!topCategory && topCategory !== TOP_CATEGORIES.main) ||
					(!!subCategory && subCategory !== CATEGORIES.entree) ||
					difficulty !== null ||
					location !== LOCATIONS.home
				}
				hasActiveSearch={!!search.trim()}
				location={location}
				onDifficultyChange={setDifficulty}
				onLocationChange={setLocation}
				onSortChange={setSort}
				sort={sort}
			/>
			<ErrorBoundary>
				<FoodList
					difficulty={difficulty}
					location={location}
					onClearDifficulty={() => setDifficulty(null)}
					onClearLocation={() => setLocation(null)}
					onClearSearch={() => setSearch("")}
					search={search}
					sort={sort}
					subCategory={subCategory}
					topCategory={topCategory}
				/>
			</ErrorBoundary>
			<BackToTop />
		</>
	);
};
