import "./NoResults.scss";

type NoResultsProps = {
	hasDifficulty: boolean;
	hasSearch: boolean;
	onClearDifficulty: () => void;
	onClearSearch: () => void;
};

export const NoResults = ({
	hasDifficulty,
	hasSearch,
	onClearDifficulty,
	onClearSearch,
}: NoResultsProps) => (
	<div className="no-results">
		<p className="no-results__message">No foods match your search.</p>
		<div className="no-results__actions">
			{hasSearch && (
				<button
					className="no-results__button"
					onClick={onClearSearch}
					type="button"
				>
					Clear Search
				</button>
			)}

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
