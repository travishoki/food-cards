import {
	DIFFICULTY_FIVE,
	DIFFICULTY_ONE,
	type Difficulty,
} from "../FoodsPage/Toolbar/DifficultyFilter.types";
import { CATEGORIES, TOP_CATEGORIES } from "../const/categories";
import {
	SORT_DIRECTIONS,
	type SortDirection,
} from "../const/sortDirections.const";

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

export const extractRawText = (
	content: { text?: string; type: string }[],
): string => (content[0].type === "text" ? (content[0].text ?? "") : "");
