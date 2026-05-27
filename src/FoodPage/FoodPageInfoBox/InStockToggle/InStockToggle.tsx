import { addFoodActivity, updateFoodInStock } from "../../../api/foods.api";

import "./InStockToggle.scss";

type InStockToggleProps = {
	docId: string | undefined;
	inStock: boolean;
	onToggle: (value: boolean) => void;
	slug: string;
};

export const InStockToggle = ({
	docId,
	inStock,
	onToggle,
	slug,
}: InStockToggleProps) => {
	const handleClick = async () => {
		const next = !inStock;

		if (docId) {
			await updateFoodInStock(docId, next);
		} else {
			await addFoodActivity(slug, next);
		}

		onToggle(next);
	};

	return (
		<div className="food-page-in-stock-toggle">
			<span className="food-page-in-stock-toggle__label">
				{inStock ? "In Stock" : "Out of Stock"}
			</span>
			<button
				aria-checked={inStock}
				className="food-page-in-stock-toggle__track"
				onClick={handleClick}
				role="switch"
				type="button"
			>
				<span className="food-page-in-stock-toggle__knob" />
			</button>
		</div>
	);
};
