import { TOP_CATEGORY_SUBCATEGORIES } from "../../const/categories";
import {
	SORT_DIRECTIONS,
	SortDirection,
} from "../../const/sortDirections.const";
import { InStockMode, PrereleaseMode } from "../../context/cardView";
import { FOODS } from "../../data";
import { Food } from "../../types";
import { Difficulty } from "../Toolbar/DifficultyFilter";
import { Location } from "../Toolbar/LocationFilter";

type GetVisibleFoodsArgs = {
	difficulty?: Difficulty | null;
	inStockMode?: InStockMode;
	location?: Location | null;
	prereleaseMode?: PrereleaseMode;
	search: string;
	sort?: SortDirection;
	subCategory?: string;
	topCategory?: string;
};

export const getVisibleFoods = ({
	difficulty = null,
	inStockMode = "show",
	location = null,
	prereleaseMode = "hide",
	search,
	sort = SORT_DIRECTIONS.asc,
	subCategory,
	topCategory,
}: GetVisibleFoodsArgs): Food[] => {
	let result = FOODS;

	if (prereleaseMode === "hide") result = result.filter((f) => !f.prerelease);
	else if (prereleaseMode === "only")
		result = result.filter((f) => f.prerelease);

	if (inStockMode === "hide")
		result = result.filter((f) => f.inStock !== false);
	else if (inStockMode === "only")
		result = result.filter((f) => f.inStock === false);

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

	if (location !== null) {
		result = result.filter((f) => f.locations === location);
	}

	const q = search.trim().toLowerCase();

	if (q) result = result.filter((f) => f.name.toLowerCase().includes(q));

	return [...result].sort((a, b) => {
		if (sort === SORT_DIRECTIONS.difficultyAsc) {
			const cmp = a.difficulty - b.difficulty;

			return cmp !== 0 ? cmp : a.name.localeCompare(b.name);
		}

		const cmp = a.name.localeCompare(b.name);

		return sort === SORT_DIRECTIONS.asc ? cmp : -cmp;
	});
};
