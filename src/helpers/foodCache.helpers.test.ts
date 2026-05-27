import { readFoodCache, writeFoodCache } from "./foodCache.helpers";

import type { Food } from "../types";

const TODAY = "2026-01-15";
const YESTERDAY = "2026-01-14";

const mockFood = (slug: string): Food => ({ slug }) as Food;

// ── localStorage mock ────────────────────────────────────────────────────────
const store: Record<string, string> = {};

const localStorageMock = {
	clear: () => {
		Object.keys(store).forEach((k) => delete store[k]);
	},
	getItem: (key: string) => store[key] ?? null,
	removeItem: (key: string) => {
		delete store[key];
	},
	setItem: (key: string, value: string) => {
		store[key] = value;
	},
};

Object.defineProperty(global, "localStorage", {
	value: localStorageMock,
	writable: true,
});

// ── helpers ──────────────────────────────────────────────────────────────────
const setLocalStorage = (date: string, data: Food[]) => {
	localStorage.setItem("food-activity-cache", JSON.stringify({ data, date }));
};

// ── setup ────────────────────────────────────────────────────────────────────
beforeEach(() => {
	localStorage.clear();
	jest.useFakeTimers();
	jest.setSystemTime(new Date(`${TODAY}T12:00:00Z`));
});

afterEach(() => {
	jest.useRealTimers();
});

// ── tests ────────────────────────────────────────────────────────────────────
describe("readFoodCache", () => {
	it("returns null when nothing is cached", () => {
		expect(readFoodCache()).toBeNull();
	});

	it("returns the cached data when the date matches today", () => {
		const foods = [mockFood("burger"), mockFood("fries")];
		setLocalStorage(TODAY, foods);

		expect(readFoodCache()).toEqual(foods);
	});

	it("returns null when the cached date is yesterday", () => {
		setLocalStorage(YESTERDAY, [mockFood("burger")]);

		expect(readFoodCache()).toBeNull();
	});

	it("returns null when the cache entry is malformed JSON", () => {
		localStorage.setItem("food-activity-cache", "not-json");

		expect(readFoodCache()).toBeNull();
	});

	it("returns null when the cache entry is missing the date field", () => {
		localStorage.setItem(
			"food-activity-cache",
			JSON.stringify({ data: [mockFood("burger")] }),
		);

		expect(readFoodCache()).toBeNull();
	});
});

describe("writeFoodCache", () => {
	it("stores data that can be read back", () => {
		const foods = [mockFood("taco"), mockFood("burrito")];
		writeFoodCache(foods);

		expect(readFoodCache()).toEqual(foods);
	});

	it("overwrites a stale cache entry", () => {
		setLocalStorage(YESTERDAY, [mockFood("old-item")]);

		const fresh = [mockFood("new-item")];
		writeFoodCache(fresh);

		expect(readFoodCache()).toEqual(fresh);
	});

	it("stores today's date in the cache", () => {
		writeFoodCache([mockFood("donut")]);

		const raw = localStorage.getItem("food-activity-cache");
		const parsed = JSON.parse(raw!);

		expect(parsed.date).toBe(TODAY);
	});

	it("stores an empty array without error", () => {
		writeFoodCache([]);

		expect(readFoodCache()).toEqual([]);
	});
});
