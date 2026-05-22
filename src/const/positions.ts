import { FOODS } from "../data/index";

type Position = {
	index: number;
	total: number;
};

export const POSITIONS: Record<string, Position> = (() => {
	const totals: Record<string, number> = {};

	for (const food of FOODS) {
		totals[food.category_key] = (totals[food.category_key] || 0) + 1;
	}

	const seen: Record<string, number> = {};
	const map: Record<string, Position> = {};

	for (const food of FOODS) {
		const i = seen[food.category_key] || 0;
		map[food.slug] = { index: i, total: totals[food.category_key] };
		seen[food.category_key] = i + 1;
	}

	return map;
})();
