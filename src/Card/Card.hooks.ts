import { useNavigate, useParams } from "react-router-dom";

import {
	getCardHeightForMode,
	getDetailCardWidth,
	getListCardWidth,
	type ViewMode,
} from "./Card.helpers";
import { useViewportWidth } from "../hooks/useViewportWidth";

import type { Food } from "../types";

type CardDimensions = {
	cardHeight: number;
	cardWidth: number;
	effectiveMode: ViewMode;
	isDetailView: boolean;
};

export const useCardDimensions = (viewMode: ViewMode): CardDimensions => {
	const { foodName } = useParams<{ foodName?: string }>();
	const viewportWidth = useViewportWidth();
	const isDetailView = !!foodName;
	const effectiveMode = isDetailView ? "full" : viewMode;
	const cardWidth = isDetailView
		? getDetailCardWidth(viewportWidth)
		: getListCardWidth(viewportWidth);
	const cardHeight = getCardHeightForMode(effectiveMode, cardWidth);

	return { cardHeight, cardWidth, effectiveMode, isDetailView };
};

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
