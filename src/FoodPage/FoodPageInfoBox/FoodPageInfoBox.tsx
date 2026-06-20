import "./FoodPageInfoBox.scss";
import { InStockStatusToggle } from "./InStockStatusToggle/InStockStatusToggle";
import { isHome } from "../../helpers/locations.helpers";

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
}: FoodPageInfoBoxProps) => {
	const { brand, location, name, slug } = food;

	return (
		<div className="food-page-info-box">
			<h2>{name}</h2>
			{brand && <p>{brand}</p>}

			{isHome(location) && (
				<InStockStatusToggle
					docId={docId}
					inStock={inStock}
					onToggle={onToggle}
					slug={slug}
				/>
			)}
		</div>
	);
};
