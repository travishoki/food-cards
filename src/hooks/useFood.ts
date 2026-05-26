import { useEffect, useState } from "react";

import { getFoodBySlug } from "../api/foods.api";

import type { Food } from "../types";

type UseFoodResult = {
	error: string | null;
	food: Food | null;
	loading: boolean;
};

export const useFood = (slug: string): UseFoodResult => {
	const [food, setFood] = useState<Food | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let cancelled = false;

		getFoodBySlug(slug)
			.then((data) => {
				if (!cancelled) setFood(data);
			})
			.catch((err: unknown) => {
				if (!cancelled)
					setError(
						err instanceof Error
							? err.message
							: "Failed to load food",
					);
			})
			.finally(() => {
				if (!cancelled) setLoading(false);
			});

		return () => {
			cancelled = true;
		};
	}, [slug]);

	return { error, food, loading };
};
