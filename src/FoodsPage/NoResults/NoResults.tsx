import { CategoryClearLink } from "./CategoryClearLink";

import "./NoResults.scss";

type NoResultsProps = {
	hasDifficulty: boolean;
	onClearDifficulty: () => void;
	onClearSearch: () => void;
	subCategory?: string;
	topCategory?: string;
};

export const NoResults = ({
	hasDifficulty,
	onClearDifficulty,
	onClearSearch,
	subCategory,
	topCategory,
}: NoResultsProps) => (
	<div className="no-results">
		<p className="no-results__message">No foods match your search.</p>
		<div className="no-results__actions">
			<CategoryClearLink
				subCategory={subCategory}
				topCategory={topCategory}
			/>

			<button
				className="no-results__button"
				onClick={onClearSearch}
				type="button"
			>
				Clear Search
			</button>

			{hasDifficulty && (
				<button
					className="no-results__button"
					onClick={onClearDifficulty}
					type="button"
				>
					Clear Difficulty
				</button>
			)}
		</div>
	</div>
);
