import { SearchSuggestions } from "./SearchSuggestions/SearchSuggestions";

import type { SearchSuggestion } from "./SearchSuggestions/SearchSuggestions.types";

import "./NoResults.scss";

type NoResultsProps = {
	hasDifficulty: boolean;
	hasSearch: boolean;
	onClearDifficulty: () => void;
	onClearSearch: () => void;
	onSearchSuggestion: (search: string) => void;
	searchSuggestions: SearchSuggestion[];
};

export const NoResults = ({
	hasDifficulty,
	hasSearch,
	onClearDifficulty,
	onClearSearch,
	onSearchSuggestion,
	searchSuggestions,
}: NoResultsProps) => (
	<div className="no-results">
		<p className="no-results__message">No foods match your search.</p>
		<SearchSuggestions
			onSearchSuggestion={onSearchSuggestion}
			searchSuggestions={searchSuggestions}
		/>
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
