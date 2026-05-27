import { Location, LOCATIONS } from "../../const/locations.const";
import { BackButton } from "../BackButton";
import { InStockToggle } from "./InStockToggle/InStockToggle";

import "./FoodPageInfoBox.scss";

type FoodPageInfoBoxProps = {
	docId: string | undefined;
	inStock: boolean;
	locations: Location | Location[];
	onToggle: (value: boolean) => void;
	slug: string;
};

export const FoodPageInfoBox = ({
	docId,
	inStock,
	locations,
	onToggle,
	slug,
}: FoodPageInfoBoxProps) => {
	const isHome = [locations].flat().includes(LOCATIONS.home);

	return (
		<div className="food-page-info-box">
			<BackButton />
			{isHome && (
				<InStockToggle
					docId={docId}
					inStock={inStock}
					onToggle={onToggle}
					slug={slug}
				/>
			)}
		</div>
	);
};
