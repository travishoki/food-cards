import { buildCategoryStructure } from "./parseNaturalLanguageFilter.helpers";

import type { MessageCreateParamsNonStreaming } from "@anthropic-ai/sdk/resources";

export const MESSAGE_OPTIONS = (
	query: string,
): MessageCreateParamsNonStreaming => ({
	max_tokens: 256,
	messages: [{ content: query, role: "user" }],
	model: "claude-haiku-4-5-20251001",
	system: SYSTEM_PROMPT,
});

const CATEGORY_STRUCTURE = buildCategoryStructure();

export const SYSTEM_PROMPT = `You are a food filter parser. The user will describe what food they want to find in natural language. Extract filter values from their query and respond ONLY with valid JSON matching this shape:

{
  "search": string,             // specific food name/keyword only, or "" if none
  "difficulty": number | null,  // exact cooking difficulty 1-5 only when user explicitly says "level 3" or "difficulty 4", otherwise null
  "topCategory": string | null, // see category structure below, or null
  "subCategory": string | null, // see category structure below, or null
  "sort": string | null         // one of the valid sort values below, or null
}

Category structure (topCategory (label): subcategory (label), ...):
${CATEGORY_STRUCTURE}

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
