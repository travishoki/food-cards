import { CARD_INFO_TOP } from "../Card.const";
import { getSidePadding } from "../Card.helpers";
import { useCardRatio } from "../CardRatioContext";
import { CookTime } from "../CookTime/CookTime";
import { InfoBar } from "../InfoBar/InfoBar";
import { Ingredients } from "../Ingredients/Ingredients";
import { Instructions } from "../Instructions/Instructions";
import { Toppings } from "../Toppings/Toppings";

import type { Food } from "../../types";

type CardInfoProps = {
	food: Food;
};

export const CardInfo = ({ food }: CardInfoProps) => {
	const cardRatio = useCardRatio();

	return (
		<div
			style={{
				left: `${getSidePadding(cardRatio)}px`,
				position: "absolute",
				right: `${getSidePadding(cardRatio)}px`,
				top: `${CARD_INFO_TOP * cardRatio}px`,
			}}
		>
			{food.info && <InfoBar text={food.info} />}

			{(food.ingredients || food.toppings) && (
				<div style={{ display: "flex" }}>
					{food.ingredients && (
						<div style={{ width: food.toppings ? "50%" : "100%" }}>
							<Ingredients items={food.ingredients} />
						</div>
					)}
					{food.toppings && (
						<div style={{ width: "50%" }}>
							<Toppings items={food.toppings} />
						</div>
					)}
				</div>
			)}

			{food.instructions && <Instructions text={food.instructions} />}

			{food.cookTime && (
				<CookTime
					instructions={food.cookTime.instructions}
					time={food.cookTime.time}
				/>
			)}
		</div>
	);
};
