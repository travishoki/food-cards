export const SORT_DIRECTIONS = {
	asc: "asc",
	desc: "desc",
	difficultyAsc: "difficulty-asc",
} as const;

export type SortDirection =
	(typeof SORT_DIRECTIONS)[keyof typeof SORT_DIRECTIONS];
