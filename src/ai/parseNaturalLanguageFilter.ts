import Anthropic from "@anthropic-ai/sdk";

import { SYSTEM_PROMPT } from "./parseNaturalLanguageFilter.const";
import { Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter.types";
import { CATEGORIES, TOP_CATEGORIES } from "../const/categories";
import { SORT_DIRECTIONS, SortDirection } from "../const/sortDirections.const";

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

	const client = new Anthropic({
		apiKey,
		dangerouslyAllowBrowser: true,
	});

	const message = await client.messages.create({
		max_tokens: 256,
		messages: [{ content: query, role: "user" }],
		model: "claude-haiku-4-5-20251001",
		system: SYSTEM_PROMPT,
	});

	const raw =
		message.content[0].type === "text" ? message.content[0].text : "";

	const text = raw
		.replace(/^```[a-z]*\n?/i, "")
		.replace(/```\s*$/i, "")
		.trim();

	const parsed = JSON.parse(text) as AiFilterResult;

	return {
		difficulty:
			parsed.difficulty !== null &&
			parsed.difficulty >= 1 &&
			/* eslint-disable-next-line no-magic-numbers */
			parsed.difficulty <= 5
				? (parsed.difficulty as Difficulty)
				: null,
		search: typeof parsed.search === "string" ? parsed.search : "",
		sort:
			parsed.sort !== null &&
			Object.values(SORT_DIRECTIONS).includes(
				parsed.sort as SortDirection,
			)
				? (parsed.sort as SortDirection)
				: null,
		subCategory:
			typeof parsed.subCategory === "string" &&
			parsed.subCategory in CATEGORIES
				? parsed.subCategory
				: null,
		topCategory:
			typeof parsed.topCategory === "string" &&
			parsed.topCategory in TOP_CATEGORIES
				? parsed.topCategory
				: null,
	};
};
