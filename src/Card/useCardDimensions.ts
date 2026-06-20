import { useParams } from "react-router-dom";

import {
	getCardHeightForMode,
	getDetailCardWidth,
	getListCardWidth,
	type ViewMode,
} from "./Card.helpers";
import { useViewportWidth } from "../hooks/useViewportWidth";

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
