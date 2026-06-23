export const SORT_DIRECTIONS = {
	asc: "asc",
	desc: "desc",
	difficultyAsc: "difficulty-asc",
} as const;

export type SortDirection =
	(typeof SORT_DIRECTIONS)[keyof typeof SORT_DIRECTIONS];

export const SORT_OPTIONS: {
	description: string;
	dir: SortDirection;
	label: string;
}[] = [
	{
		description: "alphabetical A-Z",
		dir: SORT_DIRECTIONS.asc,
		label: "A → Z",
	},
	{
		description: "alphabetical Z-A",
		dir: SORT_DIRECTIONS.desc,
		label: "Z → A",
	},
	{
		description: "easiest first",
		dir: SORT_DIRECTIONS.difficultyAsc,
		label: "Easy → Hard",
	},
];
