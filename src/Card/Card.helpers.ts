import {
	BACKGROUND_HEIGHT,
	BACKGROUND_WIDTH,
	CARD_BREAKPOINT_3_COL,
	CARD_BREAKPOINT_4_COL,
	CARD_DETAIL_MAX_WIDTH,
	CARD_GUTTER,
	CARD_MAX_VIEWPORT,
	GRAPHIC_HEIGHT,
	GRAPHIC_WIDTH,
	PAGE_SIDE_PADDING,
	TITLES_ONLY_HEIGHT,
} from "./Card.const";
import { InStockMode } from "../context/cardView";
import { double } from "../helpers/numbers";

export type ViewMode = "full" | "image" | "titles";

export const getCardHeight = (cardW: number) =>
	cardW * (BACKGROUND_HEIGHT / BACKGROUND_WIDTH);

export const getCardHeightForMode = (
	effectiveMode: ViewMode,
	cardWidth: number,
): number => {
	if (effectiveMode === "full") return getCardHeight(cardWidth);
	if (effectiveMode === "image")
		return cardWidth * (GRAPHIC_HEIGHT / GRAPHIC_WIDTH);

	return cardWidth * (TITLES_ONLY_HEIGHT / BACKGROUND_WIDTH);
};

export const getCardClassName = (
	effectiveMode: ViewMode,
	isDetailView: boolean,
	inStock: boolean,
	inStockMode: InStockMode,
): string => {
	let className = `card card--${effectiveMode}`;
	if (!isDetailView) className += " is-clickable";
	if (inStock === false && inStockMode !== "hide")
		className += " is-out-of-stock";

	return className;
};

export const getDetailCardWidth = (viewportWidth: number) =>
	// eslint-disable-next-line no-magic-numbers
	Math.min(viewportWidth - 2 * PAGE_SIDE_PADDING, CARD_DETAIL_MAX_WIDTH);

export const getListCardWidth = (viewportWidth: number) => {
	/* eslint-disable no-magic-numbers */

	const vw = Math.min(viewportWidth, CARD_MAX_VIEWPORT);
	const outer = double(PAGE_SIDE_PADDING);

	if (vw < CARD_BREAKPOINT_3_COL)
		return Math.floor((vw - outer - CARD_GUTTER) / 2);

	if (vw < CARD_BREAKPOINT_4_COL)
		return Math.floor((vw - outer - 2 * CARD_GUTTER) / 3);

	return Math.floor((vw - outer - 3 * CARD_GUTTER) / 4);

	/* eslint-enable no-magic-numbers */
};
