import type { SearchSuggestion } from "./SearchSuggestions.types";

export const getSearchSuggestionKey = (suggestion: SearchSuggestion): string =>
	suggestion.slug ?? suggestion.name;
