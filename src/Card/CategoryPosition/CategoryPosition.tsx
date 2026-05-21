import { POSITIONS } from "../../data/positions";

import "./CategoryPosition.scss";

type CategoryPositionProps = {
	slug: string;
};

export const CategoryPosition = ({ slug }: CategoryPositionProps) => {
	const pos = POSITIONS[slug];

	if (!pos) return null;

	return (
		<span className="category-position">
			{pos.index + 1}/{pos.total}
		</span>
	);
};
