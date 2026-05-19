import { useNavigate, useParams } from "react-router-dom";

import { Background } from "./Background/Background";
import { GRAPHIC_HEIGHT } from "./Card.const";
import { getCardHeight, getCardRatio } from "./Card.helpers";
import { CardProvider } from "./CardContext";
import { CardInfo } from "./CardInfo/CardInfo";
import { Graphic } from "./Graphic/Graphic";
import { Icon } from "./Icon/Icon";
import { Title } from "./Title/Title";
import { useCardView } from "../context/CardViewContext";

import type { Food } from "../types";
import "./Card.scss";

type CardProps = {
	food: Food;
};

const CARD_WIDTH_DETAIL = 500;
const CARD_WIDTH_LIST = 300;

export default function Card({ food }: CardProps) {
	const navigate = useNavigate();
	const { showFull } = useCardView();
	const { foodName, subCategory, topCategory } = useParams<{
		foodName?: string;
		subCategory?: string;
		topCategory?: string;
	}>();
	const isDetailView = !!foodName;
	const showAll = showFull || isDetailView;
	const cardWidth = isDetailView ? CARD_WIDTH_DETAIL : CARD_WIDTH_LIST;
	const cardRatio = getCardRatio(cardWidth);
	const cardHeight = showAll
		? getCardHeight(cardWidth)
		: GRAPHIC_HEIGHT * cardRatio;

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
				className="card"
				onClick={handleClick}
				style={{
					cursor: isDetailView ? "default" : "pointer",
					height: `${cardHeight}px`,
					width: `${cardWidth}px`,
				}}
			>
				<Graphic name={food.name} src={food.image_url} />
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
