import { getSearchSuggestionKey } from "./SearchSuggestions.helpers";

import type { SearchSuggestion } from "./SearchSuggestions.types";

import "./SearchSuggestions.scss";

type SearchSuggestionsProps = {
	onSearchSuggestion: (search: string) => void;
	searchSuggestions: SearchSuggestion[];
};

export const SearchSuggestions = ({
	onSearchSuggestion,
	searchSuggestions,
}: SearchSuggestionsProps) => {
	if (searchSuggestions.length === 0) return null;

	return (
		<div className="search-suggestions">
			<p className="search-suggestions__label">Try one of these:</p>
			<div className="search-suggestions__list">
				{searchSuggestions.map((suggestion) => (
					<button
						key={getSearchSuggestionKey(suggestion)}
						className="search-suggestions__button"
						onClick={() => onSearchSuggestion(suggestion.name)}
						type="button"
					>
						{suggestion.name}
					</button>
				))}
			</div>
		</div>
	);
};
