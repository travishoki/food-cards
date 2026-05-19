import { useCardView } from "../context/CardViewContext";

import "./CardViewToggle.scss";

export const CardViewToggle = () => {
	const { showFull, toggle } = useCardView();

	return (
		<div className="card-view-toggle">
			<input
				checked={showFull}
				className="card-view-toggle__input"
				id="card-view-toggle"
				onChange={toggle}
				type="checkbox"
			/>
			<label
				className="card-view-toggle__label"
				htmlFor="card-view-toggle"
			>
				{showFull ? "Full card" : "Image only"}
			</label>
		</div>
	);
};
