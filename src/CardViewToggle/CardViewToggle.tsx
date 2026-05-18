import { useCardView } from "../context/CardViewContext";

import "./CardViewToggle.scss";

export const CardViewToggle = () => {
	const { showFull, toggle } = useCardView();

	return (
		<label className="card-view-toggle">
			<input
				checked={showFull}
				className="card-view-toggle__input"
				onChange={toggle}
				type="checkbox"
			/>
			<span className="card-view-toggle__label">
				{showFull ? "Full card" : "Image only"}
			</span>
		</label>
	);
};
