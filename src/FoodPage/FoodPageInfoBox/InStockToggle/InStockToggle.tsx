import "./InStockToggle.scss";

type InStockToggleProps = {
	inStock: boolean;
};

export const InStockToggle = ({ inStock }: InStockToggleProps) => (
	<div className="food-page-in-stock-toggle">
		<span className="food-page-in-stock-toggle__label">In Stock</span>
		<button
			aria-checked={inStock}
			className="food-page-in-stock-toggle__track"
			role="switch"
			type="button"
		>
			<span className="food-page-in-stock-toggle__knob" />
		</button>
	</div>
);
