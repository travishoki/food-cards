import { FoodCard } from "./FoodCard";
import {
	CARD_GUTTER,
	CARD_MAX_VIEWPORT,
	PAGE_SIDE_PADDING,
} from "../../Card/Card.const";
import { Food } from "../../types";

type FoodListGridProps = {
	foods: Food[];
};

const style = {
	gap: `${CARD_GUTTER}px`,
	maxWidth: `${CARD_MAX_VIEWPORT}px`,
	padding: `${PAGE_SIDE_PADDING}px`,
};

export const FoodListGrid = ({ foods }: FoodListGridProps) => (
	<div className="food-cards" style={style}>
		{foods.map((food) => (
			<FoodCard
				key={food.brand ? `${food.slug}-${food.brand}` : food.slug}
				food={food}
			/>
		))}
	</div>
);
