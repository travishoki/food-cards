import Anthropic from "@anthropic-ai/sdk";

import {
	ANTHROPIC_CLIENT_OPTIONS,
	MESSAGE_OPTIONS,
} from "./parseNaturalLanguageFilter.const";
import {
	getApiKey,
	parseDifficulty,
	parseMessageToFilterResult,
	parseSearch,
	parseSort,
	parseSubCategory,
	parseTopCategory,
} from "./parseNaturalLanguageFilter.helpers";
import { type Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter.types";
import { type SortDirection } from "../const/sortDirections.const";

export type AiFilterResult = {
	difficulty: Difficulty | null;
	search: string;
	sort: SortDirection | null;
	subCategory: string | null;
	topCategory: string | null;
};

export const parseNaturalLanguageFilter = async (
	query: string,
): Promise<AiFilterResult> => {
	const apiKey = getApiKey();
	const client = new Anthropic(ANTHROPIC_CLIENT_OPTIONS(apiKey));
	const message = await client.messages.create(MESSAGE_OPTIONS(query));
	const parsed = parseMessageToFilterResult(message);

	return {
		difficulty: parseDifficulty(parsed.difficulty),
		search: parseSearch(parsed.search),
		sort: parseSort(parsed.sort),
		subCategory: parseSubCategory(parsed.subCategory),
		topCategory: parseTopCategory(parsed.topCategory),
	};
};
