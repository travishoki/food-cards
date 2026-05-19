import { useMemo } from "react";

import { getVisibleFoods } from "./FoodList.helpers";
import Card from "../../Card/Card";
import {
	CARD_GUTTER,
	CARD_MAX_VIEWPORT,
	PAGE_SIDE_PADDING,
} from "../../Card/Card.const";
import { NoResults } from "../NoResults/NoResults";

import "./FoodList.scss";

type FoodListProps = {
	onClearSearch: () => void;
	search: string;
	subCategory?: string;
	topCategory?: string;
};

export const FoodList = ({
	onClearSearch,
	search,
	subCategory,
	topCategory,
}: FoodListProps) => {
	const visibleFoods = useMemo(
		() => getVisibleFoods({ search, subCategory, topCategory }),
		[topCategory, subCategory, search],
	);

	if (visibleFoods.length === 0 && search.trim()) {
		return (
			<NoResults
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
				<Card key={food.id} food={food} />
			))}
		</div>
	);
};
