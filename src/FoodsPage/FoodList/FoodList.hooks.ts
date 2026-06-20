import { useMemo } from "react";

import { getFoodSearchSuggestions, getVisibleFoods } from "./FoodList.helpers";
import { Location } from "../../const/locations.const";
import { SortDirection } from "../../const/sortDirections.const";
import { useCardView } from "../../context/cardView";
import { Food } from "../../types";
import { Difficulty } from "../Toolbar/DifficultyFilter.types";

type UseFoodListDataArgs = {
	difficulty: Difficulty | null;
	location: Location | null;
	search: string;
	sort: SortDirection;
	subCategory?: string;
	topCategory?: string;
};

type UseFoodListDataResult = {
	searchSuggestions: { name: string; slug?: string }[];
	visibleFoods: Food[];
};

export const useFoodListData = ({
	difficulty,
	location,
	search,
	sort,
	subCategory,
	topCategory,
}: UseFoodListDataArgs): UseFoodListDataResult => {
	const { inStockMode, prereleaseMode } = useCardView();

	const visibleFoods = useMemo(
		() =>
			getVisibleFoods({
				difficulty,
				inStockMode,
				location,
				prereleaseMode,
				search,
				sort,
				subCategory,
				topCategory,
			}),
		[
			difficulty,
			inStockMode,
			location,
			prereleaseMode,
			search,
			sort,
			subCategory,
			topCategory,
		],
	);

	const searchSuggestions = useMemo(
		() => getFoodSearchSuggestions(search),
		[search],
	);

	return { searchSuggestions, visibleFoods };
};
