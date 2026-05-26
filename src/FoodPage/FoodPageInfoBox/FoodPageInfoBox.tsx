import { BackButton } from "../BackButton";
import { InStockToggle } from "./InStockToggle/InStockToggle";

import "./FoodPageInfoBox.scss";

type FoodPageInfoBoxProps = {
	docId: string | undefined;
	inStock: boolean;
	slug: string;
};

export const FoodPageInfoBox = ({
	docId,
	inStock,
	slug,
}: FoodPageInfoBoxProps) => (
	<div className="food-page-info-box">
		<BackButton />
		<InStockToggle docId={docId} inStock={inStock} slug={slug} />
	</div>
);
