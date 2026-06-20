import {
	BACKGROUND_HEIGHT,
	BACKGROUND_WIDTH,
	CARD_DETAIL_MAX_WIDTH,
	CARD_GUTTER,
	GRAPHIC_HEIGHT,
	GRAPHIC_WIDTH,
	PAGE_SIDE_PADDING,
	TITLES_ONLY_HEIGHT,
} from "./Card.const";
import {
	getCardClassName,
	getCardHeight,
	getCardHeightForMode,
	getDetailCardWidth,
	getListCardWidth,
} from "./Card.helpers";

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

describe("getDetailCardWidth", () => {
	const sp = PAGE_SIDE_PADDING;

	it("subtracts the side padding at narrow viewports", () => {
		expect(getDetailCardWidth(360)).toBe(360 - 2 * sp);
	});

	it("caps at CARD_DETAIL_MAX_WIDTH at wide viewports", () => {
		expect(getDetailCardWidth(1200)).toBe(CARD_DETAIL_MAX_WIDTH);
	});

	it("returns CARD_DETAIL_MAX_WIDTH right at the threshold", () => {
		const threshold = CARD_DETAIL_MAX_WIDTH + 2 * sp;
		expect(getDetailCardWidth(threshold)).toBe(CARD_DETAIL_MAX_WIDTH);
	});

	it("returns viewport - 2*padding just below the threshold", () => {
		const threshold = CARD_DETAIL_MAX_WIDTH + 2 * sp;
		expect(getDetailCardWidth(threshold - 1)).toBe(threshold - 1 - 2 * sp);
	});
});

describe("getListCardWidth", () => {
	const outer = 2 * PAGE_SIDE_PADDING;
	const g = CARD_GUTTER;

	describe("2 columns (viewport < 701)", () => {
		it("splits into two at narrow viewports (360)", () => {
			expect(getListCardWidth(360)).toBe(
				Math.floor((360 - outer - g) / 2),
			);
		});

		it("splits into two at 400", () => {
			expect(getListCardWidth(400)).toBe(
				Math.floor((400 - outer - g) / 2),
			);
		});

		it("splits at the upper boundary 700", () => {
			expect(getListCardWidth(700)).toBe(
				Math.floor((700 - outer - g) / 2),
			);
		});

		it("floors fractional results", () => {
			expect(getListCardWidth(501)).toBe(
				Math.floor((501 - outer - g) / 2),
			);
		});
	});

	describe("3 columns (701 ≤ viewport < 901)", () => {
		it("splits into three at 701", () => {
			expect(getListCardWidth(701)).toBe(
				Math.floor((701 - outer - 2 * g) / 3),
			);
		});

		it("splits at the upper boundary 900", () => {
			expect(getListCardWidth(900)).toBe(
				Math.floor((900 - outer - 2 * g) / 3),
			);
		});
	});

	describe("4 columns (viewport ≥ 901)", () => {
		it("splits into four at 901", () => {
			expect(getListCardWidth(901)).toBe(
				Math.floor((901 - outer - 3 * g) / 4),
			);
		});

		it("splits at the cap (1400)", () => {
			expect(getListCardWidth(1400)).toBe(
				Math.floor((1400 - outer - 3 * g) / 4),
			);
		});

		it("clamps viewports above 1400 to the 1400 width", () => {
			expect(getListCardWidth(1920)).toBe(getListCardWidth(1400));
		});

		it("clamps very large viewports (2560)", () => {
			expect(getListCardWidth(2560)).toBe(getListCardWidth(1400));
		});
	});
});

describe("getCardHeightForMode", () => {
	const width = 300;

	it("returns full card height for 'full' mode", () => {
		expect(getCardHeightForMode("full", width)).toBe(
			width * (BACKGROUND_HEIGHT / BACKGROUND_WIDTH),
		);
	});

	it("returns graphic aspect ratio height for 'image' mode", () => {
		expect(getCardHeightForMode("image", width)).toBe(
			width * (GRAPHIC_HEIGHT / GRAPHIC_WIDTH),
		);
	});

	it("returns titles-only height for 'titles' mode", () => {
		expect(getCardHeightForMode("titles", width)).toBe(
			width * (TITLES_ONLY_HEIGHT / BACKGROUND_WIDTH),
		);
	});
});

describe("getCardClassName", () => {
	it("includes the effectiveMode in the class name", () => {
		expect(getCardClassName("full", true, true, "show")).toContain(
			"card--full",
		);
		expect(getCardClassName("image", true, true, "show")).toContain(
			"card--image",
		);
	});

	it("adds is-clickable when not in detail view", () => {
		expect(getCardClassName("full", false, true, "show")).toContain(
			"is-clickable",
		);
	});

	it("does not add is-clickable in detail view", () => {
		expect(getCardClassName("full", true, true, "show")).not.toContain(
			"is-clickable",
		);
	});

	it("adds is-out-of-stock when out of stock and inStockMode is not hide", () => {
		expect(getCardClassName("full", false, false, "show")).toContain(
			"is-out-of-stock",
		);
		expect(getCardClassName("full", false, false, "only")).toContain(
			"is-out-of-stock",
		);
	});

	it("does not add is-out-of-stock when inStockMode is hide", () => {
		expect(getCardClassName("full", false, false, "hide")).not.toContain(
			"is-out-of-stock",
		);
	});

	it("does not add is-out-of-stock when in stock", () => {
		expect(getCardClassName("full", false, true, "show")).not.toContain(
			"is-out-of-stock",
		);
	});
});
