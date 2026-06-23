import {
	buildCategoryStructure,
	extractRawText,
	getAnthropicClientOptions,
	getApiKey,
	parseDifficulty,
	parseMessageToFilterResult,
	parseSearch,
	parseSort,
	parseSubCategory,
	parseTopCategory,
	stripMarkdownFences,
} from "./parseNaturalLanguageFilter.helpers";

describe("buildCategoryStructure", () => {
	it("includes each topCategory key and label", () => {
		const result = buildCategoryStructure();

		expect(result).toContain("main (Main)");
		expect(result).toContain("sweets (Sweets)");
		expect(result).toContain("snack (Snack)");
	});

	it("includes subcategory keys and labels", () => {
		const result = buildCategoryStructure();

		expect(result).toContain("breakfast (Breakfast)");
		expect(result).toContain("entree (Lunch/Dinner)");
		expect(result).toContain("grains (Grain/Bread)");
	});

	it("produces one line per topCategory", () => {
		const lines = buildCategoryStructure().split("\n");

		expect(lines).toHaveLength(5);
		expect(lines.every((l) => l.startsWith("- "))).toBe(true);
	});
});

describe("getAnthropicClientOptions", () => {
	it("returns client options with the api key and browser access enabled", () => {
		expect(getAnthropicClientOptions("test-key")).toEqual({
			apiKey: "test-key",
			dangerouslyAllowBrowser: true,
		});
	});
});

describe("getApiKey", () => {
	afterEach(() => {
		vi.unstubAllEnvs();
	});

	it("returns the api key when set", () => {
		vi.stubEnv("VITE_ANTHROPIC_API_KEY", "test-key");

		expect(getApiKey()).toBe("test-key");
	});

	it("throws when api key is not set", () => {
		vi.stubEnv("VITE_ANTHROPIC_API_KEY", "");

		expect(() => getApiKey()).toThrow(
			"VITE_ANTHROPIC_API_KEY is not set. Add it to your .env file.",
		);
	});
});

describe("extractRawText", () => {
	it("returns text when first content block is text type", () => {
		expect(extractRawText([{ text: "hello", type: "text" }])).toBe("hello");
	});

	it("returns empty string when first content block is not text type", () => {
		expect(extractRawText([{ type: "tool_use" }])).toBe("");
	});

	it("returns empty string when text is undefined", () => {
		expect(extractRawText([{ type: "text" }])).toBe("");
	});
});

describe("parseMessageToFilterResult", () => {
	it("parses a text content block into an object", () => {
		const message = {
			content: [{ text: '{"search":"pizza"}', type: "text" }],
		};

		expect(parseMessageToFilterResult(message)).toEqual({
			search: "pizza",
		});
	});

	it("strips markdown fences before parsing", () => {
		const message = {
			content: [
				{ text: '```json\n{"search":"pizza"}\n```', type: "text" },
			],
		};

		expect(parseMessageToFilterResult(message)).toEqual({
			search: "pizza",
		});
	});
});

describe("stripMarkdownFences", () => {
	it("returns plain text unchanged", () => {
		expect(stripMarkdownFences('{"key":"value"}')).toBe('{"key":"value"}');
	});

	it("strips ```json fences", () => {
		expect(stripMarkdownFences('```json\n{"key":"value"}\n```')).toBe(
			'{"key":"value"}',
		);
	});

	it("strips generic ``` fences", () => {
		expect(stripMarkdownFences('```\n{"key":"value"}\n```')).toBe(
			'{"key":"value"}',
		);
	});

	it("trims surrounding whitespace", () => {
		expect(stripMarkdownFences("  hello  ")).toBe("hello");
	});
});

describe("parseDifficulty", () => {
	it("returns valid difficulty numbers 1-5", () => {
		expect(parseDifficulty(1)).toBe(1);
		expect(parseDifficulty(5)).toBe(5);
	});

	it("returns null for out-of-range numbers", () => {
		expect(parseDifficulty(0)).toBeNull();
		expect(parseDifficulty(6)).toBeNull();
	});

	it("returns null for non-numbers", () => {
		expect(parseDifficulty("3")).toBeNull();
		expect(parseDifficulty(null)).toBeNull();
		expect(parseDifficulty(undefined)).toBeNull();
	});
});

describe("parseSearch", () => {
	it("returns the string value", () => {
		expect(parseSearch("chicken")).toBe("chicken");
		expect(parseSearch("")).toBe("");
	});

	it("returns empty string for non-strings", () => {
		expect(parseSearch(null)).toBe("");
		expect(parseSearch(undefined)).toBe("");
		expect(parseSearch(42)).toBe("");
	});
});

describe("parseSort", () => {
	it("returns valid sort values", () => {
		expect(parseSort("asc")).toBe("asc");
		expect(parseSort("desc")).toBe("desc");
		expect(parseSort("difficulty-asc")).toBe("difficulty-asc");
	});

	it("returns null for invalid sort values", () => {
		expect(parseSort("random")).toBeNull();
		expect(parseSort(null)).toBeNull();
		expect(parseSort(undefined)).toBeNull();
	});
});

describe("parseSubCategory", () => {
	it("returns valid subCategory values", () => {
		expect(parseSubCategory("breakfast")).toBe("breakfast");
		expect(parseSubCategory("dessert")).toBe("dessert");
	});

	it("returns null for invalid subCategory values", () => {
		expect(parseSubCategory("main")).toBeNull();
		expect(parseSubCategory("unknown")).toBeNull();
		expect(parseSubCategory(null)).toBeNull();
	});
});

describe("parseTopCategory", () => {
	it("returns valid topCategory values", () => {
		expect(parseTopCategory("main")).toBe("main");
		expect(parseTopCategory("sweets")).toBe("sweets");
	});

	it("returns null for invalid topCategory values", () => {
		expect(parseTopCategory("breakfast")).toBeNull();
		expect(parseTopCategory("unknown")).toBeNull();
		expect(parseTopCategory(null)).toBeNull();
	});
});
