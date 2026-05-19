import {
	BACKGROUND_HEIGHT,
	BACKGROUND_WIDTH,
	CARD_SIDE_PADDING,
	PADDING_LEFT,
} from "./Card.const";
import {
	getCardHeight,
	getCardRatio,
	getCenteredLeft,
	getListCardWidth,
	getSidePadding,
} from "./Card.helpers";

describe("getCardRatio", () => {
	it("returns 1 when card width equals BACKGROUND_WIDTH", () => {
		expect(getCardRatio(BACKGROUND_WIDTH)).toBe(1);
	});

	it("returns the scaled ratio for a smaller width", () => {
		expect(getCardRatio(BACKGROUND_WIDTH / 2)).toBe(0.5);
	});

	it("returns 0 for a width of 0", () => {
		expect(getCardRatio(0)).toBe(0);
	});

	it("scales linearly with width", () => {
		expect(getCardRatio(375)).toBe(375 / BACKGROUND_WIDTH);
	});
});

describe("getCardHeight", () => {
	it("returns BACKGROUND_HEIGHT when card width equals BACKGROUND_WIDTH", () => {
		expect(getCardHeight(BACKGROUND_WIDTH)).toBe(BACKGROUND_HEIGHT);
	});

	it("returns half BACKGROUND_HEIGHT when width is half BACKGROUND_WIDTH", () => {
		expect(getCardHeight(BACKGROUND_WIDTH / 2)).toBe(BACKGROUND_HEIGHT / 2);
	});

	it("returns 0 for a width of 0", () => {
		expect(getCardHeight(0)).toBe(0);
	});

	it("preserves the aspect ratio", () => {
		const cardW = 300;
		expect(getCardHeight(cardW) / cardW).toBe(
			BACKGROUND_HEIGHT / BACKGROUND_WIDTH,
		);
	});
});

describe("getCenteredLeft", () => {
	it("returns 0 when item and container are equal width", () => {
		expect(getCenteredLeft(100, 100)).toBe(0);
	});

	it("returns half the remaining space when item is smaller", () => {
		expect(getCenteredLeft(100, 300)).toBe(100);
	});

	it("returns a negative offset when item is larger than container", () => {
		expect(getCenteredLeft(300, 100)).toBe(-100);
	});

	it("handles fractional widths", () => {
		expect(getCenteredLeft(50.5, 100)).toBe(24.75);
	});
});

describe("getSidePadding", () => {
	it("returns PADDING_LEFT at ratio 1", () => {
		expect(getSidePadding(1)).toBe(PADDING_LEFT);
	});

	it("returns 0 at ratio 0", () => {
		expect(getSidePadding(0)).toBe(0);
	});

	it("scales with the ratio", () => {
		expect(getSidePadding(0.5)).toBe(PADDING_LEFT * 0.5);
	});
});

describe("getListCardWidth", () => {
	const sp = CARD_SIDE_PADDING;

	describe("1 column (viewport < 400px)", () => {
		it("subtracts two side paddings at 360", () => {
			expect(getListCardWidth(360)).toBe(360 - 2 * sp);
		});

		it("works at boundary just under 400", () => {
			expect(getListCardWidth(399)).toBe(399 - 2 * sp);
		});

		it("returns negative for tiny viewports (no clamp)", () => {
			expect(getListCardWidth(10)).toBe(10 - 2 * sp);
		});
	});

	describe("2 columns (400 ≤ viewport < 701)", () => {
		it("splits into two at 400", () => {
			expect(getListCardWidth(400)).toBe(Math.floor((400 - 3 * sp) / 2));
		});

		it("splits at the upper boundary 700", () => {
			expect(getListCardWidth(700)).toBe(Math.floor((700 - 3 * sp) / 2));
		});

		it("floors fractional results", () => {
			expect(getListCardWidth(501)).toBe(Math.floor((501 - 3 * sp) / 2));
		});
	});

	describe("3 columns (701 ≤ viewport < 901)", () => {
		it("splits into three at 701", () => {
			expect(getListCardWidth(701)).toBe(Math.floor((701 - 4 * sp) / 3));
		});

		it("splits at the upper boundary 900", () => {
			expect(getListCardWidth(900)).toBe(Math.floor((900 - 4 * sp) / 3));
		});
	});

	describe("4 columns (viewport ≥ 901)", () => {
		it("splits into four at 901", () => {
			expect(getListCardWidth(901)).toBe(Math.floor((901 - 5 * sp) / 4));
		});

		it("splits at large viewports", () => {
			expect(getListCardWidth(1920)).toBe(
				Math.floor((1920 - 5 * sp) / 4),
			);
		});
	});
});
