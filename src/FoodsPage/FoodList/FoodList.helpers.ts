import { FOODS } from "../../data";
import { TOP_CATEGORY_SUBCATEGORIES } from "../../data/categories";
import { Food } from "../../types";
import { Difficulty } from "../Toolbar/DifficultyFilter";
import { SortDirection } from "../Toolbar/SortPanel";

type GetVisibleFoodsArgs = {
	difficulty?: Difficulty | null;
	search: string;
	showPrerelease?: boolean;
	sort?: SortDirection;
	subCategory?: string;
	topCategory?: string;
};

export const getVisibleFoods = ({
	difficulty = null,
	search,
	showPrerelease = false,
	sort = "asc",
	subCategory,
	topCategory,
}: GetVisibleFoodsArgs): Food[] => {
	let result = FOODS;

	if (!showPrerelease) result = result.filter((f) => !f.prerelease);

	if (topCategory && !subCategory) {
		const keys =
			TOP_CATEGORY_SUBCATEGORIES[
				topCategory as keyof typeof TOP_CATEGORY_SUBCATEGORIES
			];

		if (keys) result = result.filter((f) => keys.includes(f.category_key));
	} else if (subCategory) {
		result = result.filter((f) => f.category_key === subCategory);
	}

	if (difficulty !== null) {
		result = result.filter((f) => f.difficulty === difficulty);
	}

	const q = search.trim().toLowerCase();

	if (q) result = result.filter((f) => f.name.toLowerCase().includes(q));

	return [...result].sort((a, b) => {
		const cmp = a.name.localeCompare(b.name);

		return sort === "asc" ? cmp : -cmp;
	});
};
