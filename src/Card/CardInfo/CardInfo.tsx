import { CARD_INFO_TOP } from "../Card.const";
import { getSidePadding } from "../Card.helpers";
import { CookTime } from "../CookTime/CookTime";
import { InfoBar } from "../InfoBar/InfoBar";
import { Ingredients } from "../Ingredients/Ingredients";
import { Instructions } from "../Instructions/Instructions";
import { Toppings } from "../Toppings/Toppings";

import type { Food } from "../../types";

type CardInfoProps = {
	cardRatio: number;
	food: Food;
};

export const CardInfo = ({ cardRatio, food }: CardInfoProps) => (
	<div
		style={{
			left: `${getSidePadding(cardRatio)}px`,
			position: "absolute",
			right: `${getSidePadding(cardRatio)}px`,
			top: `${CARD_INFO_TOP * cardRatio}px`,
		}}
	>
		{food.info && <InfoBar cardRatio={cardRatio} text={food.info} />}

		{(food.ingredients || food.toppings) && (
			<div style={{ display: "flex" }}>
				{food.ingredients && (
					<div style={{ width: food.toppings ? "50%" : "100%" }}>
						<Ingredients
							cardRatio={cardRatio}
							items={food.ingredients}
						/>
					</div>
				)}
				{food.toppings && (
					<div style={{ width: "50%" }}>
						<Toppings cardRatio={cardRatio} items={food.toppings} />
					</div>
				)}
			</div>
		)}

		{food.instructions && (
			<Instructions cardRatio={cardRatio} text={food.instructions} />
		)}

		{food.cookTime && (
			<CookTime
				cardRatio={cardRatio}
				instructions={food.cookTime.instructions}
				time={food.cookTime.time}
			/>
		)}
	</div>
);
