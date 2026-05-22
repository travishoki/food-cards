import "./CategoryPosition.scss";

type CategoryPositionProps = {
	position: { index: number; total: number };
};

export const CategoryPosition = ({ position }: CategoryPositionProps) => (
	<span className="category-position">
		{position.index + 1}/{position.total}
	</span>
);
