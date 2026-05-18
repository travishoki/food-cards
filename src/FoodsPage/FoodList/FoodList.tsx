import { useMemo } from "react";

import { getVisibleFoods } from "./FoodList.helpers";
import Card from "../../Card/Card";

type FoodListProps = {
	search: string;
	subCategory?: string;
	topCategory?: string;
};

export const FoodList = ({
	search,
	subCategory,
	topCategory,
}: FoodListProps) => {
	const visibleFoods = useMemo(
		() => getVisibleFoods({ search, subCategory, topCategory }),
		[topCategory, subCategory, search],
	);

	return (
		<div className="food-cards">
			{visibleFoods.map((food) => (
				<Card key={food.id} food={food} />
			))}
		</div>
	);
};
