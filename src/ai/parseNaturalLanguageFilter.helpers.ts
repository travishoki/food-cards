import {
	DIFFICULTY_FIVE,
	DIFFICULTY_ONE,
	type Difficulty,
} from "../FoodsPage/Toolbar/DifficultyFilter.types";
import {
	CATEGORIES,
	CATEGORY_DATA,
	TOP_CATEGORIES,
	TOP_CATEGORY_DATA,
	TOP_CATEGORY_SUBCATEGORIES,
} from "../const/categories";
import {
	SORT_DIRECTIONS,
	SORT_OPTIONS,
	type SortDirection,
} from "../const/sortDirections.const";

import type { ClientOptions } from "@anthropic-ai/sdk";

export const stripMarkdownFences = (raw: string): string =>
	raw
		.replace(/^```[a-z]*\n?/i, "")
		.replace(/```\s*$/i, "")
		.trim();

export const parseDifficulty = (value: unknown): Difficulty | null => {
	if (
		typeof value === "number" &&
		value >= DIFFICULTY_ONE &&
		value <= DIFFICULTY_FIVE
	) {
		return value as Difficulty;
	}

	return null;
};

export const parseSearch = (value: unknown): string =>
	typeof value === "string" ? value : "";

export const parseSort = (value: unknown): SortDirection | null => {
	if (
		typeof value === "string" &&
		Object.values(SORT_DIRECTIONS).includes(value as SortDirection)
	) {
		return value as SortDirection;
	}

	return null;
};

export const parseSubCategory = (value: unknown): string | null => {
	if (typeof value === "string" && value in CATEGORIES) return value;

	return null;
};

export const parseTopCategory = (value: unknown): string | null => {
	if (typeof value === "string" && value in TOP_CATEGORIES) return value;

	return null;
};

export const getAnthropicClientOptions = (apiKey: string): ClientOptions => ({
	apiKey,
	dangerouslyAllowBrowser: true,
});

export const getApiKey = (): string => {
	const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY as string | undefined;

	if (!apiKey) {
		throw new Error(
			"VITE_ANTHROPIC_API_KEY is not set. Add it to your .env file.",
		);
	}

	return apiKey;
};

export const extractRawText = (
	content: { text?: string; type: string }[],
): string => (content[0].type === "text" ? (content[0].text ?? "") : "");

export const buildSortValues = (): string =>
	SORT_OPTIONS.map((opt) => `- "${opt.dir}" (${opt.description})`).join("\n");

export const buildCategoryStructure = (): string =>
	Object.entries(TOP_CATEGORY_SUBCATEGORIES)
		.map(([top, subs]) => {
			const topLabel =
				TOP_CATEGORY_DATA[top as keyof typeof TOP_CATEGORY_DATA]
					?.label ?? top;
			const subsFormatted = subs
				.map((s) => `${s} (${CATEGORY_DATA[s]?.label ?? s})`)
				.join(", ");

			return `- ${top} (${topLabel}): ${subsFormatted || "(no subcategories)"}`;
		})
		.join("\n");

export const parseMessageToFilterResult = (message: {
	content: { text?: string; type: string }[];
}): Record<string, unknown> => {
	const raw = extractRawText(message.content);
	const text = stripMarkdownFences(raw);

	return JSON.parse(text) as Record<string, unknown>;
};
