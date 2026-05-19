import { useParams } from "react-router-dom";

import Card from "../Card/Card";
import { FOODS } from "../data";
import { foodBySlug } from "../helpers";
import { Food } from "../types";
import { BackButton } from "./BackButton";
import { MissingFood } from "./MissingFood";

import "./FoodPage.scss";

export const FoodPage = () => {
	const { foodName } = useParams<{ foodName: string }>();
	const food = foodBySlug(FOODS, foodName ?? "") as Food;

	if (!food) return <MissingFood />;

	return (
		<div className="food-detail">
			<BackButton />
			<Card food={food} />
		</div>
	);
};
