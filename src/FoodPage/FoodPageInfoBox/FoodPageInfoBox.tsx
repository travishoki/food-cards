import { InStockToggle } from "./InStockToggle/InStockToggle";

import "./FoodPageInfoBox.scss";

type FoodPageInfoBoxProps = {
	docId: string | undefined;
	inStock: boolean;
	onToggle: (value: boolean) => void;
	slug: string;
};

export const FoodPageInfoBox = ({
	docId,
	inStock,
	onToggle,
	slug,
}: FoodPageInfoBoxProps) => (
	<div className="food-page-info-box">
		<InStockToggle
			docId={docId}
			inStock={inStock}
			onToggle={onToggle}
			slug={slug}
		/>
	</div>
);
