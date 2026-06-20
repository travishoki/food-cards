import Anthropic from "@anthropic-ai/sdk";

import { Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter.types";
import { CATEGORIES } from "../const/categories";
import { SORT_DIRECTIONS, SortDirection } from "../const/sortDirections.const";

export type AiFilterResult = {
	difficulty: Difficulty | null;
	search: string;
	sort: SortDirection | null;
	subCategory: string | null;
};

const SYSTEM_PROMPT = `You are a food filter parser. The user will describe what food they want to find in natural language. Extract filter values from their query and respond ONLY with valid JSON matching this shape:

{
  "search": string,       // specific food name/keyword only, or "" if none
  "difficulty": number | null,  // exact cooking difficulty 1-5 only when user explicitly says "level 3" or "difficulty 4", otherwise null
  "subCategory": string | null, // one of the valid subCategory values below, or null
  "sort": string | null   // one of the valid sort values below, or null
}

Valid subCategory values: ${Object.keys(CATEGORIES).join(", ")}

Valid sort values:
- "asc" (alphabetical A-Z)
- "desc" (alphabetical Z-A)
- "difficulty-asc" (easiest first)

Category hints:
- breakfast = morning meals
- candy = sweets/candy
- dairy = cheese, yogurt, milk products
- dessert = cakes, cookies, ice cream
- drinks = beverages
- entree = lunch or dinner main dishes
- fruit = fruits
- grains = bread, rice, pasta, cereal
- protein = meat, eggs, beans
- sides = side dishes
- vegetables = veggies

IMPORTANT rules:
- "easy", "simple", "quick" → set sort to "difficulty-asc", leave difficulty null
- "hard", "difficult", "complex", "challenging" → set sort to "desc", leave difficulty null
- Only set difficulty to a number when user says exactly "level 3", "difficulty 4", "rating 2", etc.
- NEVER put words like "easy", "hard", "simple", "quick", "fast" into search
- NEVER put category words (breakfast, dessert, entree, etc.) into search — use subCategory instead
- Only put specific food names or unique ingredients into search (e.g. "chicken", "pizza", "garlic")
- Respond with raw JSON only, no markdown fences`;

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
	};
};
