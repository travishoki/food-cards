import type { Food } from "../types";

const CACHE_KEY = "food-activity-cache";

type FoodCache = {
	data: Food[];
	date: string;
};

// eslint-disable-next-line no-magic-numbers
const todayString = (): string => new Date().toISOString().slice(0, 10);

export const readFoodCache = (): Food[] | null => {
	try {
		const raw = localStorage.getItem(CACHE_KEY);
		if (!raw) return null;

		const parsed: FoodCache = JSON.parse(raw);
		if (parsed.date !== todayString()) return null;

		return parsed.data;
	} catch {
		return null;
	}
};

export const writeFoodCache = (data: Food[]): void => {
	try {
		const cache: FoodCache = { data, date: todayString() };
		localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
	} catch {
		// Storage quota exceeded or unavailable — fail silently
	}
};

export const invalidateFoodCache = (): void => {
	localStorage.removeItem(CACHE_KEY);
};
