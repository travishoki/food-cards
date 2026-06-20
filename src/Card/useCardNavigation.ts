import { useNavigate, useParams } from "react-router-dom";

import type { Food } from "../types";

export const useCardNavigation = (
	food: Food,
	isDetailView: boolean,
): (() => void) | undefined => {
	const navigate = useNavigate();
	const { location, segment, topCategory } = useParams<{
		location?: string;
		segment?: string;
		topCategory?: string;
	}>();

	if (isDetailView) return undefined;

	return () => {
		if (location && topCategory) {
			navigate(`/${location}/${topCategory}/food/${food.slug}`);
		} else if (segment) {
			navigate(`/${segment}/food/${food.slug}`);
		} else {
			navigate(`/food/${food.slug}`);
		}
	};
};
