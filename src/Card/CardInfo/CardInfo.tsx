import { CookTime } from "../CookTime/CookTime";
import { InfoBar } from "../InfoBar/InfoBar";
import { Ingredients } from "../Ingredients/Ingredients";
import { Instructions } from "../Instructions/Instructions";
import { RecipeQR } from "../RecipeQR/RecipeQR";
import { Toppings } from "../Toppings/Toppings";

import type { Food } from "../../types";
import "./CardInfo.scss";

type CardInfoProps = {
	food: Food;
};

export const CardInfo = ({ food }: CardInfoProps) => (
	<div className="card-info">
		{food.info && <InfoBar text={food.info} />}

		{(food.ingredients || food.toppings) && (
			<div className="card-info__row">
				{food.ingredients && (
					<div
						className="card-info__col"
						style={{ width: food.toppings ? "50%" : "100%" }}
					>
						<Ingredients items={food.ingredients} />
					</div>
				)}
				{food.toppings && (
					<div className="card-info__col" style={{ width: "50%" }}>
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

		{food.recipe_link && <RecipeQR url={food.recipe_link} />}
	</div>
);
