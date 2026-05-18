import { TOP_CATEGORY_SUBCATEGORIES } from "../../categories";
import { FOODS } from "../../foods";
import { Food } from "../../types";

type GetVisibleFoodsArgs = {
	search: string;
	subCategory?: string;
	topCategory?: string;
};

export const getVisibleFoods = ({
	search,
	subCategory,
	topCategory,
}: GetVisibleFoodsArgs): Food[] => {
	let result = FOODS;

	if (topCategory && !subCategory) {
		const keys =
			TOP_CATEGORY_SUBCATEGORIES[
				topCategory as keyof typeof TOP_CATEGORY_SUBCATEGORIES
			];

		if (keys) result = result.filter((f) => keys.includes(f.category_key));
	} else if (subCategory) {
		result = [...result.filter((f) => f.category_key === subCategory)].sort(
			(a, b) => a.id - b.id,
		);
	}

	const q = search.trim().toLowerCase();

	if (q) result = result.filter((f) => f.name.toLowerCase().includes(q));

	return result;
};
