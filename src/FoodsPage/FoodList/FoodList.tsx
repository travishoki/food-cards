import { useMemo } from "react";

import { getVisibleFoods } from "./FoodList.helpers";
import Card from "../../Card/Card";
import {
	CARD_GUTTER,
	CARD_MAX_VIEWPORT,
	PAGE_SIDE_PADDING,
} from "../../Card/Card.const";
import { useCardView } from "../../context/cardView";
import { NoResults } from "../NoResults/NoResults";
import { Difficulty } from "../Toolbar/DifficultyFilter";
import { Location } from "../Toolbar/LocationFilter";
import { SortDirection } from "../Toolbar/SortPanel";

import "./FoodList.scss";

type FoodListProps = {
	difficulty: Difficulty | null;
	location: Location | null;
	onClearDifficulty: () => void;
	onClearLocation: () => void;
	onClearSearch: () => void;
	search: string;
	sort: SortDirection;
	subCategory?: string;
	topCategory?: string;
};

export const FoodList = ({
	difficulty,
	location,
	onClearDifficulty,
	onClearLocation,
	onClearSearch,
	search,
	sort,
	subCategory,
	topCategory,
}: FoodListProps) => {
	const { prereleaseMode } = useCardView();

	const visibleFoods = useMemo(
		() =>
			getVisibleFoods({
				difficulty,
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
			location,
			prereleaseMode,
		],
	);

	if (
		visibleFoods.length === 0 &&
		(search.trim() || difficulty !== null || location !== null)
	) {
		return (
			<NoResults
				hasDifficulty={difficulty !== null}
				hasLocation={location !== null}
				onClearDifficulty={onClearDifficulty}
				onClearLocation={onClearLocation}
				onClearSearch={onClearSearch}
				subCategory={subCategory}
				topCategory={topCategory}
			/>
		);
	}

	return (
		<div
			className="food-cards"
			style={{
				gap: `${CARD_GUTTER}px`,
				maxWidth: `${CARD_MAX_VIEWPORT}px`,
				padding: `${PAGE_SIDE_PADDING}px`,
			}}
		>
			{visibleFoods.map((food) => (
				<Card key={food.slug} food={food} />
			))}
		</div>
	);
};
