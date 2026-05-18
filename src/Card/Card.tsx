import { useNavigate, useParams } from "react-router-dom";

import { Background } from "./Background/Background";
import { CARD_INFO_TOP, GRAPHIC_HEIGHT } from "./Card.const";
import { getCardHeight, getCardRatio, getSidePadding } from "./Card.helpers";
import { CookTime } from "./CookTime/CookTime";
import { Graphic } from "./Graphic/Graphic";
import { Icon } from "./Icon/Icon";
import { InfoBar } from "./InfoBar/InfoBar";
import { Ingredients } from "./Ingredients/Ingredients";
import { Instructions } from "./Instructions/Instructions";
import { Title } from "./Title/Title";
import { Toppings } from "./Toppings/Toppings";
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
	const cardW = isDetailView ? CARD_WIDTH_DETAIL : CARD_WIDTH_LIST;
	const cardRatio = getCardRatio(cardW);
	const cardH = showAll ? getCardHeight(cardW) : GRAPHIC_HEIGHT * cardRatio;

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
		<div
			className="card"
			onClick={handleClick}
			style={{
				cursor: isDetailView ? "default" : "pointer",
				height: `${cardH}px`,
				width: `${cardW}px`,
			}}
		>
			<Graphic
				cardRatio={cardRatio}
				cardW={cardW}
				name={food.name}
				src={food.image_url}
			/>
			{showAll && (
				<>
					<Title cardRatio={cardRatio} name={food.name} />
					<Icon
						cardRatio={cardRatio}
						categoryKey={food.category_key}
					/>

					<div
						style={{
							left: `${getSidePadding(cardRatio)}px`,
							position: "absolute",
							right: `${getSidePadding(cardRatio)}px`,
							top: `${CARD_INFO_TOP * cardRatio}px`,
						}}
					>
						{food.info && (
							<InfoBar cardRatio={cardRatio} text={food.info} />
						)}

						{(food.ingredients || food.toppings) && (
							<div style={{ display: "flex" }}>
								{food.ingredients && (
									<div
										style={{
											width: food.toppings
												? "50%"
												: "100%",
										}}
									>
										<Ingredients
											cardRatio={cardRatio}
											items={food.ingredients}
										/>
									</div>
								)}
								{food.toppings && (
									<div style={{ width: "50%" }}>
										<Toppings
											cardRatio={cardRatio}
											items={food.toppings}
										/>
									</div>
								)}
							</div>
						)}

						{food.instructions && (
							<Instructions
								cardRatio={cardRatio}
								text={food.instructions}
							/>
						)}

						{food.cookTime && (
							<CookTime
								cardRatio={cardRatio}
								instructions={food.cookTime.instructions}
								time={food.cookTime.time}
							/>
						)}
					</div>
					<Background
						cardH={cardH}
						cardW={cardW}
						categoryKey={food.category_key}
					/>
				</>
			)}
		</div>
	);
}
