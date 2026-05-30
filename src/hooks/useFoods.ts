import { useCallback, useEffect, useState } from "react";

import { Dictionary, keyBy } from "lodash";

import { getFoods } from "../api/foods.api";
import { readFoodCache, writeFoodCache } from "../helpers/foodCache.helpers";

import type { Food } from "../types";

type UseFoodsResult = {
	error: string | null;
	foodActivityDictionary: Dictionary<Food>;
	loading: boolean;
	setFoodInStock: (slug: string, inStock: boolean) => void;
};

export const useFoods = (): UseFoodsResult => {
	const [foodActivityDictionary, setfoodActivityDictionary] = useState<
		Dictionary<Food>
	>(() => {
		const cached = readFoodCache();

		return cached ? keyBy(cached, "slug") : {};
	});
	const [loading, setLoading] = useState(() => readFoodCache() === null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (readFoodCache() !== null) return;

		let cancelled = false;

		getFoods()
			.then((data) => {
				if (cancelled) return;
				writeFoodCache(data);
				setfoodActivityDictionary(keyBy(data, "slug"));
			})
			.catch((err: unknown) => {
				if (!cancelled)
					setError(
						err instanceof Error
							? err.message
							: "Failed to load foods",
					);
			})
			.finally(() => {
				if (!cancelled) setLoading(false);
			});

		return () => {
			cancelled = true;
		};
	}, []);

	const setFoodInStock = useCallback((slug: string, inStock: boolean) => {
		setfoodActivityDictionary((prev) => {
			const existing = prev[slug];
			if (!existing) return prev;

			return { ...prev, [slug]: { ...existing, inStock } };
		});
	}, []);

	return { error, foodActivityDictionary, loading, setFoodInStock };
};
