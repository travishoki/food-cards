import { useCardView } from "../context/CardViewContext";

import "./PrereleaseToggle.scss";

export const PrereleaseToggle = () => {
	const { setShowPrerelease, showPrerelease } = useCardView();

	return (
		<div className="prerelease-toggle">
			<label
				className="prerelease-toggle__label"
				htmlFor="prerelease-toggle"
			>
				Prerelease:
			</label>
			<input
				checked={showPrerelease}
				className="prerelease-toggle__input"
				id="prerelease-toggle"
				onChange={(e) => setShowPrerelease(e.target.checked)}
				type="checkbox"
			/>
		</div>
	);
};
