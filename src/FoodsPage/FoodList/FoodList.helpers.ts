import { TOP_CATEGORY_SUBCATEGORIES } from "../../const/categories";
import { Location } from "../../const/locations.const";
import {
	SORT_DIRECTIONS,
	SortDirection,
} from "../../const/sortDirections.const";
import { InStockMode, PrereleaseMode } from "../../context/cardView";
import { FOODS } from "../../data";
import { Food } from "../../types";
import { Difficulty } from "../Toolbar/DifficultyFilter.types";

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

type SearchSuggestion = {
	name: string;
	slug?: string;
};

export const normalizeSearchText = (value: string): string =>
	value
		.toLowerCase()
		// Split accented letters from their accent marks so the next line can
		// strip the marks. This keeps "cafe" and "cafe" searchable the same way.
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9\s]/g, " ")
		.replace(/\s+/g, " ")
		.trim();

export const getSearchTokens = (value: string): string[] =>
	normalizeSearchText(value).split(" ").filter(Boolean);

export const getFoodSearchText = (food: Food): string =>
	[
		food.name,
		food.brand,
		food.category_key,
		food.location,
		food.info,
		...(food.ingredients ?? []),
		...(food.toppings ?? []),
	].join(" ");

export const getEditDistance = (a: string, b: string): number => {
	if (a === b) return 0;
	if (!a.length) return b.length;
	if (!b.length) return a.length;

	// Levenshtein distance: the fewest single-character edits needed to turn
	// one token into the other. This is what lets "appel" still match "apple".
	const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
	const current = Array.from({ length: b.length + 1 }, () => 0);

	for (let i = 1; i <= a.length; i += 1) {
		current[0] = i;

		for (let j = 1; j <= b.length; j += 1) {
			const cost = a[i - 1] === b[j - 1] ? 0 : 1;

			current[j] = Math.min(
				current[j - 1] + 1,
				previous[j] + 1,
				previous[j - 1] + cost,
			);
		}

		for (let j = 0; j <= b.length; j += 1) {
			previous[j] = current[j];
		}
	}

	return previous[b.length];
};

export const getTokenScore = (
	queryToken: string,
	foodToken: string,
): number => {
	/* eslint-disable no-magic-numbers */

	// Strong, intentional matches win first.
	if (foodToken === queryToken) return 120;
	if (foodToken.startsWith(queryToken)) return 90;
	if (foodToken.includes(queryToken)) return 70;

	// Very short fuzzy searches get noisy fast, so only longer tokens can use
	// typo tolerance.
	if (queryToken.length < 4) return 0;

	const distance = getEditDistance(queryToken, foodToken);
	// Longer words can tolerate a little more misspelling than short words.
	const maxDistance = Math.max(2, Math.floor(queryToken.length / 3));

	// Typo matches are useful, but weaker than exact/prefix/contains matches.
	return distance <= maxDistance ? 50 - distance : 0;

	/* eslint-enable no-magic-numbers */
};

export const getFoodSearchScore = (food: Food, query: string): number => {
	/* eslint-disable no-magic-numbers */

	const queryTokens = getSearchTokens(query);
	if (!queryTokens.length) return 1;

	const foodText = normalizeSearchText(getFoodSearchText(food));
	const nameText = normalizeSearchText(food.name);
	const foodTokens = foodText.split(" ").filter(Boolean);
	const nameTokens = nameText.split(" ").filter(Boolean);
	let score = 0;

	for (const queryToken of queryTokens) {
		// For 1-2 letter searches, only search the food name. Searching every
		// ingredient/category field for "a" or "to" would make almost everything
		// match.
		const tokensToSearch = queryToken.length < 3 ? nameTokens : foodTokens;
		const bestScopedTokenScore = tokensToSearch.reduce(
			(best, foodToken) =>
				Math.max(best, getTokenScore(queryToken, foodToken)),
			0,
		);

		if (bestScopedTokenScore === 0) return 0;
		score += bestScopedTokenScore;
	}

	// Give a small boost when the whole phrase appears in the food name.
	if (nameText.includes(queryTokens.join(" "))) {
		score += 30;
	}

	return score;

	/* eslint-enable no-magic-numbers */
};

const sortFoods = (foods: Food[], sort: SortDirection): Food[] =>
	[...foods].sort((a, b) => {
		if (sort === SORT_DIRECTIONS.difficultyAsc) {
			const cmp = a.difficulty - b.difficulty;

			return cmp !== 0 ? cmp : a.name.localeCompare(b.name);
		}

		const cmp = a.name.localeCompare(b.name);

		return sort === SORT_DIRECTIONS.asc ? cmp : -cmp;
	});

export const getFoodSearchSuggestions = (
	search: string,
	limit = 4,
): SearchSuggestion[] => {
	const query = search.trim();
	if (!query) return [];

	return FOODS.map((food) => ({
		food,
		score: getFoodSearchScore(food, query),
	}))
		.filter(({ score }) => score > 0)
		.sort(
			(a, b) =>
				b.score - a.score || a.food.name.localeCompare(b.food.name),
		)
		.slice(0, limit)
		.map(({ food }) => ({ name: food.name, slug: food.slug }));
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
		result = result.filter((f) => f.location === location);
	}

	const q = search.trim().toLowerCase();

	if (q) result = result.filter((f) => getFoodSearchScore(f, q) > 0);

	return sortFoods(result, sort);
};
