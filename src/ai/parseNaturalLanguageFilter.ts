import Anthropic from "@anthropic-ai/sdk";

import { Difficulty } from "../FoodsPage/Toolbar/DifficultyFilter.types";
import {
	CATEGORIES,
	TOP_CATEGORIES,
	TOP_CATEGORY_SUBCATEGORIES,
} from "../const/categories";
import { SORT_DIRECTIONS, SortDirection } from "../const/sortDirections.const";

export type AiFilterResult = {
	difficulty: Difficulty | null;
	search: string;
	sort: SortDirection | null;
	subCategory: string | null;
	topCategory: string | null;
};

const SYSTEM_PROMPT = `You are a food filter parser. The user will describe what food they want to find in natural language. Extract filter values from their query and respond ONLY with valid JSON matching this shape:

{
  "search": string,             // specific food name/keyword only, or "" if none
  "difficulty": number | null,  // exact cooking difficulty 1-5 only when user explicitly says "level 3" or "difficulty 4", otherwise null
  "topCategory": string | null, // see category structure below, or null
  "subCategory": string | null, // see category structure below, or null
  "sort": string | null         // one of the valid sort values below, or null
}

Category structure (topCategory → subcategories):
${Object.entries(TOP_CATEGORY_SUBCATEGORIES)
	.map(([top, subs]) =>
		subs.length > 0
			? `- ${top}: ${subs.join(", ")}`
			: `- ${top}: (no subcategories)`,
	)
	.join("\n")}

Category hints:
- main = meals, lunch, dinner, breakfast, entrees
- sides = side dishes
- snack = snacking, quick bites, dairy, fruit, grains, protein, vegetables
- drinks = beverages
- sweets = sweet things, candy, dessert, cakes, cookies

Valid sort values:
- "asc" (alphabetical A-Z)
- "desc" (alphabetical Z-A)
- "difficulty-asc" (easiest first)

IMPORTANT rules:
- When you set subCategory, you MUST set topCategory to its parent from the category structure above
- When only a topCategory applies (e.g. "snacks", "sweets"), set topCategory and leave subCategory null
- "easy", "simple", "quick" → set sort to "difficulty-asc", leave difficulty null
- "hard", "difficult", "complex", "challenging" → set sort to "desc", leave difficulty null
- Only set difficulty to a number when user says exactly "level 3", "difficulty 4", "rating 2", etc.
- NEVER put words like "easy", "hard", "simple", "quick", "fast" into search
- NEVER put category or subcategory words into search — use topCategory/subCategory instead
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
		topCategory:
			typeof parsed.topCategory === "string" &&
			parsed.topCategory in TOP_CATEGORIES
				? parsed.topCategory
				: null,
	};
};
