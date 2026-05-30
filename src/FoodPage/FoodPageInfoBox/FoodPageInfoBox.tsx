import "./FoodPageInfoBox.scss";
import { InStockToggle } from "./InStockToggle/InStockToggle";
import { LOCATIONS } from "../../const/locations.const";

import type { Food } from "../../types";

type FoodPageInfoBoxProps = {
	docId: string | undefined;
	food: Food;
	inStock: boolean;
	onToggle: (value: boolean) => void;
};

export const FoodPageInfoBox = ({
	docId,
	food,
	inStock,
	onToggle,
}: FoodPageInfoBoxProps) => (
	<div className="food-page-info-box">
		<p>{food.name}</p>
		{food.locations === LOCATIONS.home && (
			<InStockToggle
				docId={docId}
				inStock={inStock}
				onToggle={onToggle}
				slug={food.slug}
			/>
		)}
	</div>
);
