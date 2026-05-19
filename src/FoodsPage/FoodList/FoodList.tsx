import { useMemo } from "react";

import { getVisibleFoods } from "./FoodList.helpers";
import Card from "../../Card/Card";
import { CARD_SIDE_PADDING } from "../../Card/Card.const";
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
				gap: `${CARD_SIDE_PADDING}px`,
				padding: `${CARD_SIDE_PADDING}px`,
			}}
		>
			{visibleFoods.map((food) => (
				<Card key={food.id} food={food} />
			))}
		</div>
	);
};
