import { useMemo } from "react";

import Card from "../../Card/Card";
import { TOP_CATEGORY_SUBCATEGORIES } from "../../categories";
import { FOODS } from "../../foods";

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
	const visibleFoods = useMemo(() => {
		let foods = FOODS;

		if (topCategory && !subCategory) {
			const keys =
				TOP_CATEGORY_SUBCATEGORIES[
					topCategory as keyof typeof TOP_CATEGORY_SUBCATEGORIES
				];

			if (keys)
				foods = foods.filter((f) => keys.includes(f.category_key));
		} else if (subCategory) {
			foods = [
				...foods.filter((f) => f.category_key === subCategory),
			].sort((a, b) => a.id - b.id);
		}

		const q = search.trim().toLowerCase();

		if (q) foods = foods.filter((f) => f.name.toLowerCase().includes(q));

		return foods;
	}, [topCategory, subCategory, search]);

	return (
		<div className="food-cards">
			{visibleFoods.map((food) => (
				<Card key={food.id} food={food} />
			))}
		</div>
	);
};
