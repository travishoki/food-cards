import { BackButton } from "../BackButton";
import { InStockToggle } from "./InStockToggle/InStockToggle";

import "./FoodPageInfoBox.scss";

type FoodPageInfoBoxProps = {
	inStock: boolean;
};

export const FoodPageInfoBox = ({ inStock }: FoodPageInfoBoxProps) => (
	<div className="food-page-info-box">
		<BackButton />
		<InStockToggle inStock={inStock} />
	</div>
);
