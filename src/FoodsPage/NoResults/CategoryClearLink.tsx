import { Link } from "react-router-dom";

import { CATEGORY_DATA, TOP_CATEGORY_DATA } from "../../const/categories";

type CategoryClearLinkProps = {
	subCategory?: string;
	topCategory?: string;
};

export const CategoryClearLink = ({
	subCategory,
	topCategory,
}: CategoryClearLinkProps) => {
	const topLabel =
		topCategory && topCategory in TOP_CATEGORY_DATA
			? TOP_CATEGORY_DATA[topCategory as keyof typeof TOP_CATEGORY_DATA]
					.label
			: undefined;
	const subLabel =
		subCategory && CATEGORY_DATA[subCategory]
			? CATEGORY_DATA[subCategory].label
			: undefined;

	if (subCategory && topCategory) {
		return (
			<Link className="no-results__button" to={`/${topCategory}`}>
				Show All &ldquo;{topLabel ?? topCategory}&rdquo;
			</Link>
		);
	}

	if (!subCategory && topCategory) {
		return (
			<Link className="no-results__button" to="/">
				Clear Category
			</Link>
		);
	}

	if (subCategory && !topCategory && subLabel) {
		return (
			<Link className="no-results__button" to="/">
				Clear Category
			</Link>
		);
	}

	return null;
};
