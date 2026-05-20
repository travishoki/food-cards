import "./DifficultyIcon.scss";

import type { Food } from "../../types";

type DifficultyIconProps = {
	difficulty: Food["difficulty"];
};

const CIRCLE = "M12 3 a9 9 0 1 0 0.0001 0 z";
const DIAMOND = "M12 2 L22 12 L12 22 L2 12 Z";
const STAR =
	"M12 2 L14.6 9.5 L22.5 9.5 L16 14.2 L18.5 21.7 L12 17 L5.5 21.7 L8 14.2 L1.5 9.5 L9.4 9.5 Z";

const PATHS: Record<Food["difficulty"], string> = {
	1: CIRCLE,
	2: DIAMOND,
	3: DIAMOND,
	4: DIAMOND,
	5: STAR,
};

export const DifficultyIcon = ({ difficulty }: DifficultyIconProps) => (
	<svg
		aria-label={`Difficulty ${difficulty}`}
		className="difficulty-icon"
		fill="#000"
		role="img"
		viewBox="0 0 24 24"
	>
		<path d={PATHS[difficulty]} />
	</svg>
);
