import { useParams } from "react-router-dom";

import { BackButton } from "./BackButton";
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
	const { foodActivityDictionary, loading, setFoodInStock } =
		useFoodsContext();

	if (loading) return <FoodListLoader />;

	const food = foodBySlug(FOODS, foodName ?? "");

	if (!food) return <MissingFood />;

	const activity = foodActivityDictionary[foodName ?? ""];
	const docId = activity?.docId;
	const inStock = activity?.inStock ?? true;

	return (
		<div className="food-page">
			<div className="food-page__nav">
				<BackButton />
			</div>
			<div className="food-detail">
				<FoodPageInfoBox
					docId={docId}
					food={food}
					inStock={inStock}
					onToggle={(value) => setFoodInStock(food.slug, value)}
				/>
				<Card food={food} inStock={inStock} />
			</div>
		</div>
	);
};
