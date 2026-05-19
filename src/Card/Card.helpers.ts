import {
	BACKGROUND_HEIGHT,
	BACKGROUND_WIDTH,
	CARD_BREAKPOINT_2_COL,
	CARD_BREAKPOINT_3_COL,
	CARD_BREAKPOINT_4_COL,
	CARD_SIDE_PADDING,
	PADDING_LEFT,
} from "./Card.const";

export const getCardRatio = (cardW: number) => {
	return cardW / BACKGROUND_WIDTH;
};

export const getCardHeight = (cardW: number) => {
	const wRatio = getCardRatio(cardW);
	const height = BACKGROUND_HEIGHT * wRatio;

	return height;
};

export const getCenteredLeft = (itemWidth: number, fullWidth: number) => {
	return (fullWidth - itemWidth) / 2;
};

export const getSidePadding = (cardRatio: number) => {
	const left = PADDING_LEFT * cardRatio;

	return left;
};

export const getListCardWidth = (viewportWidth: number) => {
	if (viewportWidth < CARD_BREAKPOINT_2_COL)
		return viewportWidth - 2 * CARD_SIDE_PADDING;

	if (viewportWidth < CARD_BREAKPOINT_3_COL)
		return Math.floor((viewportWidth - 3 * CARD_SIDE_PADDING) / 2);

	if (viewportWidth < CARD_BREAKPOINT_4_COL)
		return Math.floor((viewportWidth - 4 * CARD_SIDE_PADDING) / 3);

	return Math.floor((viewportWidth - 5 * CARD_SIDE_PADDING) / 4);
};
