import "./FoodPageInfoBox.scss";
import { InStockToggle } from "./InStockToggle/InStockToggle";
import { LOCATIONS, type Location } from "../../const/locations.const";

type FoodPageInfoBoxProps = {
	docId: string | undefined;
	inStock: boolean;
	locations: Location;
	onToggle: (value: boolean) => void;
	slug: string;
};

export const FoodPageInfoBox = ({
	docId,
	inStock,
	locations,
	onToggle,
	slug,
}: FoodPageInfoBoxProps) => (
	<div className="food-page-info-box">
		{locations === LOCATIONS.home && (
			<InStockToggle
				docId={docId}
				inStock={inStock}
				onToggle={onToggle}
				slug={slug}
			/>
		)}
	</div>
);
