import { useNavigate, useParams } from "react-router-dom";

import { Background } from "./Background/Background";
import { GRAPHIC_HEIGHT, GRAPHIC_WIDTH } from "./Card.const";
import {
	getCardHeight,
	getCardRatio,
	getDetailCardWidth,
	getListCardWidth,
} from "./Card.helpers";
import { CardProvider } from "./CardContext";
import { CardInfo } from "./CardInfo/CardInfo";
import { Graphic } from "./Graphic/Graphic";
import { Icon } from "./Icon/Icon";
import { Title } from "./Title/Title";
import { useCardView } from "../context/CardViewContext";
import { useViewportWidth } from "../hooks/useViewportWidth";

import type { Food } from "../types";
import "./Card.scss";

type CardProps = {
	food: Food;
};

export default function Card({ food }: CardProps) {
	const navigate = useNavigate();
	const { showFull } = useCardView();
	const { foodName, subCategory, topCategory } = useParams<{
		foodName?: string;
		subCategory?: string;
		topCategory?: string;
	}>();
	const viewportWidth = useViewportWidth();
	const isDetailView = !!foodName;
	const showAll = showFull || isDetailView;
	const cardWidth = isDetailView
		? getDetailCardWidth(viewportWidth)
		: getListCardWidth(viewportWidth);
	const cardRatio = getCardRatio(cardWidth);
	const cardHeight = showAll
		? getCardHeight(cardWidth)
		: cardWidth * (GRAPHIC_HEIGHT / GRAPHIC_WIDTH);

	const handleClick = isDetailView
		? undefined
		: () => {
				if (topCategory && subCategory) {
					navigate(
						`/${topCategory}/${subCategory}/food/${food.slug}`,
					);
				} else if (topCategory) {
					navigate(`/${topCategory}/food/${food.slug}`);
				} else {
					navigate(`/food/${food.slug}`);
				}
			};

	return (
		<CardProvider value={{ cardHeight, cardRatio, cardWidth }}>
			<div
				className={`card ${isDetailView ? "" : "is-clickable"}`}
				onClick={handleClick}
				style={{
					height: `${cardHeight}px`,
					width: `${cardWidth}px`,
				}}
			>
				<Graphic
					fullWidth={!showAll}
					name={food.name}
					src={food.image_url}
				/>
				{showAll && (
					<>
						<Title name={food.name} />
						<Icon categoryKey={food.category_key} />
						<CardInfo food={food} />
						<Background categoryKey={food.category_key} />
					</>
				)}
			</div>
		</CardProvider>
	);
}
