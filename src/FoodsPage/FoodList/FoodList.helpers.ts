import { PrereleaseMode } from "../../context/cardView";
import { FOODS } from "../../data";
import { TOP_CATEGORY_SUBCATEGORIES } from "../../data/categories";
import { Food } from "../../types";
import { Difficulty } from "../Toolbar/DifficultyFilter";
import { Location } from "../Toolbar/LocationFilter";
import { SortDirection } from "../Toolbar/SortPanel";

type GetVisibleFoodsArgs = {
	difficulty?: Difficulty | null;
	location?: Location | null;
	prereleaseMode?: PrereleaseMode;
	search: string;
	sort?: SortDirection;
	subCategory?: string;
	topCategory?: string;
};

export const getVisibleFoods = ({
	difficulty = null,
	location = null,
	prereleaseMode = "hide",
	search,
	sort = "asc",
	subCategory,
	topCategory,
}: GetVisibleFoodsArgs): Food[] => {
	let result = FOODS;

	if (prereleaseMode === "hide") result = result.filter((f) => !f.prerelease);
	else if (prereleaseMode === "only")
		result = result.filter((f) => f.prerelease);

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
		result = result.filter((f) => f.locations.includes(location));
	}

	const q = search.trim().toLowerCase();

	if (q) result = result.filter((f) => f.name.toLowerCase().includes(q));

	return [...result].sort((a, b) => {
		if (sort === "difficulty-asc") {
			const cmp = a.difficulty - b.difficulty;

			return cmp !== 0 ? cmp : a.name.localeCompare(b.name);
		}

		const cmp = a.name.localeCompare(b.name);

		return sort === "asc" ? cmp : -cmp;
	});
};
