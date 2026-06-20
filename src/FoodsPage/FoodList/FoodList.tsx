import { useFoodListData } from "./FoodList.hooks";
import { FoodListGrid } from "./FoodListGrid";
import { FoodListLoader } from "./FoodListLoader/FoodListLoader";
import { Location } from "../../const/locations.const";
import { SortDirection } from "../../const/sortDirections.const";
import { useFoodsContext } from "../../context/foods";
import { NoResults } from "../NoResults/NoResults";
import { Difficulty } from "../Toolbar/DifficultyFilter.types";

import "./FoodList.scss";

type FoodListProps = {
	difficulty: Difficulty | null;
	location: Location | null;
	onClearDifficulty: () => void;
	onClearSearch: () => void;
	onSearchSuggestion: (search: string) => void;
	search: string;
	sort: SortDirection;
	subCategory?: string;
	topCategory?: string;
};

export const FoodList = ({
	difficulty,
	location,
	onClearDifficulty,
	onClearSearch,
	onSearchSuggestion,
	search,
	sort,
	subCategory,
	topCategory,
}: FoodListProps) => {
	const { error, loading } = useFoodsContext();
	const { searchSuggestions, visibleFoods } = useFoodListData({
		difficulty,
		location,
		search,
		sort,
		subCategory,
		topCategory,
	});

	if (loading) return <FoodListLoader />;
	if (error) throw new Error(error);

	if (
		visibleFoods.length === 0 &&
		(search.trim() || difficulty !== null || location !== null)
	) {
		return (
			<NoResults
				hasDifficulty={difficulty !== null}
				hasSearch={!!search.trim()}
				onClearDifficulty={onClearDifficulty}
				onClearSearch={onClearSearch}
				onSearchSuggestion={onSearchSuggestion}
				searchSuggestions={searchSuggestions}
			/>
		);
	}

	return <FoodListGrid foods={visibleFoods} />;
};
