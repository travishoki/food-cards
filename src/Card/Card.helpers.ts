import {
	BACKGROUND_HEIGHT,
	BACKGROUND_WIDTH,
	CARD_BREAKPOINT_3_COL,
	CARD_BREAKPOINT_4_COL,
	CARD_DETAIL_MAX_WIDTH,
	CARD_GUTTER,
	CARD_MAX_VIEWPORT,
	PAGE_SIDE_PADDING,
} from "./Card.const";

export const getCardHeight = (cardW: number) =>
	cardW * (BACKGROUND_HEIGHT / BACKGROUND_WIDTH);

export const getDetailCardWidth = (viewportWidth: number) =>
	Math.min(viewportWidth - 2 * PAGE_SIDE_PADDING, CARD_DETAIL_MAX_WIDTH);

export const getListCardWidth = (viewportWidth: number) => {
	const vw = Math.min(viewportWidth, CARD_MAX_VIEWPORT);
	const outer = 2 * PAGE_SIDE_PADDING;

	if (vw < CARD_BREAKPOINT_3_COL)
		return Math.floor((vw - outer - CARD_GUTTER) / 2);

	if (vw < CARD_BREAKPOINT_4_COL)
		return Math.floor((vw - outer - 2 * CARD_GUTTER) / 3);

	return Math.floor((vw - outer - 3 * CARD_GUTTER) / 4);
};
