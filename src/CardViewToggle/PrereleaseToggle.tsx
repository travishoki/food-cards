import { PrereleaseMode, useCardView } from "../context/CardViewContext";

import "./CardViewToggle.scss";

const OPTIONS: { label: string; value: PrereleaseMode }[] = [
	{ label: "Show", value: "show" },
	{ label: "Hide", value: "hide" },
	{ label: "Only", value: "only" },
];

export const PrereleaseToggle = () => {
	const { prereleaseMode, setPrereleaseMode } = useCardView();

	return (
		<div className="card-view-toggle">
			<span className="card-view-toggle__label">Prerelease:</span>
			{OPTIONS.map((opt) => (
				<button
					key={opt.value}
					aria-pressed={prereleaseMode === opt.value}
					className={`card-view-toggle__option ${prereleaseMode === opt.value ? "is-active" : ""}`}
					onClick={() => setPrereleaseMode(opt.value)}
					type="button"
				>
					{opt.label}
				</button>
			))}
		</div>
	);
};
