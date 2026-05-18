import { Link } from "react-router-dom";

import { CATEGORY_DATA, TOP_CATEGORY_DATA } from "../../data/categories";

import "./NoResults.css";

type NoResultsProps = {
	onClearSearch: () => void;
	subCategory?: string;
	topCategory?: string;
};

export const NoResults = ({
	onClearSearch,
	subCategory,
	topCategory,
}: NoResultsProps) => {
	const topLabel =
		topCategory && topCategory in TOP_CATEGORY_DATA
			? TOP_CATEGORY_DATA[topCategory as keyof typeof TOP_CATEGORY_DATA]
					.label
			: undefined;
	const subLabel =
		subCategory && CATEGORY_DATA[subCategory]
			? CATEGORY_DATA[subCategory].label
			: undefined;

	return (
		<div className="no-results">
			<p className="no-results__message">No foods match your search.</p>
			<div className="no-results__actions">
				<button
					className="no-results__button"
					onClick={onClearSearch}
					type="button"
				>
					Clear search
				</button>

				{subCategory && topCategory && (
					<Link className="no-results__button" to={`/${topCategory}`}>
						Show all {topLabel ?? topCategory}
					</Link>
				)}

				{!subCategory && topCategory && (
					<Link className="no-results__button" to="/">
						Clear Category
					</Link>
				)}

				{subCategory && !topCategory && subLabel && (
					<Link className="no-results__button" to="/">
						Clear Category
					</Link>
				)}
			</div>
		</div>
	);
};
