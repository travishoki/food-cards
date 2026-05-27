import { useState } from "react";

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
	const { foodActivityDictionary, loading } = useFoodsContext();

	if (loading) return <FoodListLoader />;

	const food = foodBySlug(FOODS, foodName ?? "");

	if (!food) return <MissingFood />;

	const activity = foodActivityDictionary[foodName ?? ""];
	const docId = activity?.docId;

	const [inStock, setInStock] = useState(activity?.inStock ?? true);

	return (
		<div className="food-page">
			<div className="food-page__nav">
				<BackButton />
			</div>
			<div className="food-detail">
				<FoodPageInfoBox
					docId={docId}
					inStock={inStock}
					locations={food.locations}
					onToggle={setInStock}
					slug={food.slug}
				/>
				<Card food={food} inStock={inStock} />
			</div>
		</div>
	);
};
