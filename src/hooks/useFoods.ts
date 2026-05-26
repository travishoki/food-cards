import { useEffect, useState } from "react";

import { Dictionary, keyBy } from "lodash";

import { getFoods } from "../api/foods.api";

import type { Food } from "../types";

type UseFoodsResult = {
	error: string | null;
	foodActivityDictionary: Dictionary<Food>;
	loading: boolean;
};

export const useFoods = (): UseFoodsResult => {
	const [foodActivityDictionary, setfoodActivityDictionary] = useState<
		Dictionary<Food>
	>({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let cancelled = false;

		getFoods()
			.then((data) => {
				const lookupLibrary = keyBy(data, "slug");
				if (!cancelled) setfoodActivityDictionary(lookupLibrary);
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

	return { error, foodActivityDictionary, loading };
};
