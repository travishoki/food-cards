import { useState } from "react";

import { addFoodActivity, updateFoodInStock } from "../../../api/foods.api";

import "./InStockToggle.scss";

type InStockToggleProps = {
	docId: string | undefined;
	inStock: boolean;
	slug: string;
};

export const InStockToggle = ({ docId, inStock, slug }: InStockToggleProps) => {
	const [value, setValue] = useState(inStock);

	const handleClick = async () => {
		const next = !value;

		if (docId) {
			await updateFoodInStock(docId, next);
		} else {
			await addFoodActivity(slug, next);
		}

		setValue(next);
	};

	return (
		<div className="food-page-in-stock-toggle">
			<span className="food-page-in-stock-toggle__label">In Stock</span>
			<button
				aria-checked={value}
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
