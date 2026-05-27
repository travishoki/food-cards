import { CSSProperties } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Background } from "./Background/Background";
import { Brand } from "./Brand/Brand";
import {
	BACKGROUND_WIDTH,
	BRAND_SIZE,
	CARD_BOTTOM_PADDING,
	CARD_INFO_PADDING_BOTTOM,
	CARD_INFO_TOP,
	COOK_TIME_CLOCK_SIZE,
	COOK_TIME_FONT_SIZE_INSTRUCTIONS,
	COOK_TIME_FONT_SIZE_TIME,
	COOK_TIME_HEIGHT,
	DIFFICULTY_ICON_BOTTOM,
	DIFFICULTY_ICON_SIZE,
	GRAPHIC_HEIGHT,
	GRAPHIC_TOP,
	GRAPHIC_WIDTH,
	ICON_PADDING,
	ICON_SIZE,
	ICON_TOP,
	INFO_BAR_FONT_SIZE,
	INFO_BAR_HEIGHT,
	INFO_BAR_TEXT_LEFT_PADDING,
	INFO_BAR_TEXT_TOP_PADDING,
	INFO_BAR_WIDTH,
	INGREDIENTS_FONT_SIZE,
	INSTRUCTIONS_FONT_SIZE,
	CARD_INNER_PADDING,
	PRERELEASE_FONT_SIZE,
	RECIPE_QR_LABEL_FONT_SIZE,
	RECIPE_QR_SIZE,
	TITLE_FONT_SIZE,
	TITLE_TOP,
	TITLES_ONLY_HEIGHT,
	TOPPINGS_FONT_SIZE,
} from "./Card.const";
import {
	getCardHeight,
	getDetailCardWidth,
	getListCardWidth,
} from "./Card.helpers";
import { CardInfo } from "./CardInfo/CardInfo";
import { DifficultyIcon } from "./DifficultyIcon/DifficultyIcon";
import { Graphic } from "./Graphic/Graphic";
import { Icon } from "./Icon/Icon";
import { PrereleaseLabel } from "./PrereleaseLabel/PrereleaseLabel";
import { Title } from "./Title/Title";
import { useCardView } from "../context/cardView";
import { useViewportWidth } from "../hooks/useViewportWidth";

import type { Food } from "../types";
import "./Card.scss";

type CardProps = {
	food: Food;
	inStock: boolean;
};

// Convert design-space px (anchored to BACKGROUND_WIDTH) to a cqw string.
const dcqw = (px: number) => `${(px / BACKGROUND_WIDTH) * 100}cqw`;

const designVars: CSSProperties = {
	"--brand-size": dcqw(BRAND_SIZE),
	"--card-bottom-padding": dcqw(CARD_BOTTOM_PADDING),
	"--card-info-padding-bottom": dcqw(CARD_INFO_PADDING_BOTTOM),
	"--card-info-top": dcqw(CARD_INFO_TOP),
	"--card-inner-padding": dcqw(CARD_INNER_PADDING),
	"--cook-time-clock-size": dcqw(COOK_TIME_CLOCK_SIZE),
	"--cook-time-font-size-instructions": dcqw(
		COOK_TIME_FONT_SIZE_INSTRUCTIONS,
	),
	"--cook-time-font-size-time": dcqw(COOK_TIME_FONT_SIZE_TIME),
	"--cook-time-height": dcqw(COOK_TIME_HEIGHT),
	"--difficulty-icon-bottom": dcqw(DIFFICULTY_ICON_BOTTOM),
	"--difficulty-icon-size": dcqw(DIFFICULTY_ICON_SIZE),
	"--graphic-height": dcqw(GRAPHIC_HEIGHT),
	"--graphic-top": dcqw(GRAPHIC_TOP),
	"--graphic-width": dcqw(GRAPHIC_WIDTH),
	"--icon-padding": dcqw(ICON_PADDING),
	"--icon-size": dcqw(ICON_SIZE),
	"--icon-top": dcqw(ICON_TOP),
	"--info-bar-font-size": dcqw(INFO_BAR_FONT_SIZE),
	"--info-bar-height": dcqw(INFO_BAR_HEIGHT),
	"--info-bar-text-left-padding": dcqw(INFO_BAR_TEXT_LEFT_PADDING),
	"--info-bar-text-top-padding": dcqw(INFO_BAR_TEXT_TOP_PADDING),
	"--info-bar-width": dcqw(INFO_BAR_WIDTH),
	"--ingredients-font-size": dcqw(INGREDIENTS_FONT_SIZE),
	"--instructions-font-size": dcqw(INSTRUCTIONS_FONT_SIZE),
	"--prerelease-font-size": dcqw(PRERELEASE_FONT_SIZE),
	"--recipe-qr-label-font-size": dcqw(RECIPE_QR_LABEL_FONT_SIZE),
	"--recipe-qr-size": dcqw(RECIPE_QR_SIZE),
	"--title-font-size": dcqw(TITLE_FONT_SIZE),
	"--title-top": dcqw(TITLE_TOP),
	"--toppings-font-size": dcqw(TOPPINGS_FONT_SIZE),
} as CSSProperties;

export default function Card({ food, inStock }: CardProps) {
	const navigate = useNavigate();
	const { inStockMode, viewMode } = useCardView();
	const { foodName, location } = useParams<{
		foodName?: string;
		location?: string;
	}>();
	const viewportWidth = useViewportWidth();
	const isDetailView = !!foodName;
	const effectiveMode = isDetailView ? "full" : viewMode;
	const cardWidth = isDetailView
		? getDetailCardWidth(viewportWidth)
		: getListCardWidth(viewportWidth);
	const cardHeight = (() => {
		if (effectiveMode === "full") return getCardHeight(cardWidth);
		if (effectiveMode === "image")
			return cardWidth * (GRAPHIC_HEIGHT / GRAPHIC_WIDTH);

		return cardWidth * (TITLES_ONLY_HEIGHT / BACKGROUND_WIDTH);
	})();

	const handleClick = isDetailView
		? undefined
		: () => {
				if (location) {
					navigate(`/${location}/food/${food.slug}`);
				} else {
					navigate(`/home/food/${food.slug}`);
				}
			};

	let className = `card card--${effectiveMode}`;
	if (!isDetailView) className += " is-clickable";
	if (inStock === false && inStockMode !== "hide")
		className += " is-out-of-stock";

	return (
		<div
			className={className}
			data-category={food.category_key}
			onClick={handleClick}
			style={{
				...designVars,
				height: `${cardHeight}px`,
				width: `${cardWidth}px`,
			}}
		>
			{effectiveMode !== "titles" && (
				<Graphic
					fullWidth={effectiveMode === "image"}
					name={food.name}
					src={food.image_url}
				/>
			)}
			{effectiveMode === "full" && (
				<>
					<Icon categoryKey={food.category_key} />
					{food.brand && <Brand brand={food.brand} />}
					<CardInfo food={food} />
					<DifficultyIcon difficulty={food.difficulty} />
					{food.prerelease && <PrereleaseLabel />}
					<Background categoryKey={food.category_key} />
				</>
			)}
			{(effectiveMode === "full" || effectiveMode === "titles") && (
				<Title name={food.name} />
			)}
		</div>
	);
}
