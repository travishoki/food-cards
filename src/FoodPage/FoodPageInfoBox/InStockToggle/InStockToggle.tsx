import { useState } from "react";

import toast from "react-hot-toast";

import { ConfirmModal } from "../../../ConfirmModal/ConfirmModal";
import { addFoodActivity, updateFoodInStock } from "../../../api/foods.api";
import { fromFoodSlug } from "../../../helpers/slug.helpers";

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
	const [showConfirm, setShowConfirm] = useState(false);

	const handleClick = () => {
		setShowConfirm(true);
	};

	const handleConfirm = async () => {
		setShowConfirm(false);
		const next = !inStock;

		if (docId) {
			await updateFoodInStock(docId, next);
		} else {
			await addFoodActivity(slug, next);
		}

		onToggle(next);
		toast.success(next ? "Marked as in stock" : "Marked as out of stock");
	};

	const handleCancel = () => {
		setShowConfirm(false);
	};

	return (
		<>
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
			{showConfirm && (
				<ConfirmModal
					message={`Mark "${fromFoodSlug(slug)}" as ${inStock ? "out of stock" : "in stock"}?`}
					onCancel={handleCancel}
					onConfirm={handleConfirm}
					title="Update Stock Status"
				/>
			)}
		</>
	);
};
