import Anthropic from "@anthropic-ai/sdk";

import {
	ANTHROPIC_CLIENT_OPTIONS,
	MESSAGE_OPTIONS,
} from "./parseNaturalLanguageFilter.const";
import {
	parseDifficulty,
	parseSearch,
	parseSort,
	parseSubCategory,
	parseTopCategory,
	stripMarkdownFences,
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
	const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY as string | undefined;

	if (!apiKey) {
		throw new Error(
			"VITE_ANTHROPIC_API_KEY is not set. Add it to your .env file.",
		);
	}

	const client = new Anthropic(ANTHROPIC_CLIENT_OPTIONS(apiKey));

	const message = await client.messages.create(MESSAGE_OPTIONS(query));

	const raw =
		message.content[0].type === "text" ? message.content[0].text : "";

	const text = stripMarkdownFences(raw);

	const parsed = JSON.parse(text) as Record<string, unknown>;

	return {
		difficulty: parseDifficulty(parsed.difficulty),
		search: parseSearch(parsed.search),
		sort: parseSort(parsed.sort),
		subCategory: parseSubCategory(parsed.subCategory),
		topCategory: parseTopCategory(parsed.topCategory),
	};
};
