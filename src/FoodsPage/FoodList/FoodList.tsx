import { useMemo } from "react";

import { getFoodSearchSuggestions, getVisibleFoods } from "./FoodList.helpers";
import { FoodListLoader } from "./FoodListLoader/FoodListLoader";
import Card from "../../Card/Card";
import {
	CARD_GUTTER,
	CARD_MAX_VIEWPORT,
	PAGE_SIDE_PADDING,
} from "../../Card/Card.const";
import { SortDirection } from "../../const/sortDirections.const";
import { useCardView } from "../../context/cardView";
import { useFoodsContext } from "../../context/foods";
import { NoResults } from "../NoResults/NoResults";
import { Difficulty } from "../Toolbar/DifficultyFilter";
import { Location } from "../Toolbar/LocationFilter";

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
	const { inStockMode, prereleaseMode } = useCardView();
	const { error, foodActivityDictionary, loading } = useFoodsContext();

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
			topCategory,
			subCategory,
			search,
			sort,
			difficulty,
			inStockMode,
			location,
			prereleaseMode,
		],
	);
	const searchSuggestions = useMemo(
		() => getFoodSearchSuggestions(search),
		[search],
	);

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

	const style = {
		gap: `${CARD_GUTTER}px`,
		maxWidth: `${CARD_MAX_VIEWPORT}px`,
		padding: `${PAGE_SIDE_PADDING}px`,
	};

	return (
		<div className="food-cards" style={style}>
			{visibleFoods.map((food) => {
				const inStock =
					foodActivityDictionary[food.slug ?? ""]?.inStock ?? true;
				const { slug } = food;
				const fileName = food.brand ? `${slug}-${food.brand}` : slug;

				return <Card key={fileName} food={food} inStock={inStock} />;
			})}
		</div>
	);
};
