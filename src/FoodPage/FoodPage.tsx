import { useParams } from "react-router-dom";

import { FoodPageInfoBox } from "./FoodPageInfoBox/FoodPageInfoBox";
import { MissingFood } from "./MissingFood";
import Card from "../Card/Card";
import { FoodListLoader } from "../FoodsPage/FoodList/FoodListLoader/FoodListLoader";
import { useFoodsContext } from "../context/foods";
import { FOODS } from "../data";
import { foodBySlug } from "../helpers/slug.helpers";

import "./FoodPage.scss";

export const FoodPage = () => {
	const { foodName } = useParams<{ foodName: string }>();
	const food = foodBySlug(FOODS, foodName ?? "") as Food;
	const { foodActivityDictionary, loading } = useFoodsContext();

	if (loading) return <FoodListLoader />;
	if (!food) return <MissingFood />;

	const inStock = foodActivityDictionary[foodName ?? ""]?.inStock ?? true;

	return (
		<div className="food-detail">
			<FoodPageInfoBox inStock={inStock} />
			<Card food={food} inStock={inStock} />
		</div>
	);
};
