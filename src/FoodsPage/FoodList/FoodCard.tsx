import Card from "../../Card/Card";
import { useFoodsContext } from "../../context/foods";
import { Food } from "../../types";

type FoodCardProps = {
	food: Food;
};

export const FoodCard = ({ food }: FoodCardProps) => {
	const { foodActivityDictionary } = useFoodsContext();
	const inStock = foodActivityDictionary[food.slug ?? ""]?.inStock ?? true;
	const { slug } = food;
	const fileName = food.brand ? `${slug}-${food.brand}` : slug;

	return <Card key={fileName} food={food} inStock={inStock} />;
};
