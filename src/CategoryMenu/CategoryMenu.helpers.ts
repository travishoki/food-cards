import {
	CATEGORIES,
	CATEGORY_DATA,
	TOP_CATEGORIES,
	TOP_CATEGORY_DATA,
	TOP_CATEGORY_ORDER,
	TOP_CATEGORY_SUBCATEGORIES,
} from "../const/categories";

const TOP_CATEGORY_DEFAULT_SUB: Partial<
	Record<keyof typeof TOP_CATEGORIES, string>
> = {
	[TOP_CATEGORIES.main]: CATEGORIES.entree,
};

export function topMenuItems() {
	return TOP_CATEGORY_ORDER.map((key) => ({
		defaultSubCategory: TOP_CATEGORY_DEFAULT_SUB[key],
		key,
		label: TOP_CATEGORY_DATA[key].label,
	}));
}

export function subCategoriesForTop(topKey: string) {
	const keys =
		TOP_CATEGORY_SUBCATEGORIES[
			topKey as keyof typeof TOP_CATEGORY_SUBCATEGORIES
		] ?? [];

	return keys.map((key) => ({ key, label: CATEGORY_DATA[key].label }));
}
