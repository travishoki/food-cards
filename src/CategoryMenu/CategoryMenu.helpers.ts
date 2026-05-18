import {
	CATEGORY_DATA,
	TOP_CATEGORY_DATA,
	TOP_CATEGORY_ORDER,
	TOP_CATEGORY_SUBCATEGORIES,
} from "../categories";

export function topMenuItems() {
	return TOP_CATEGORY_ORDER.map((key) => ({
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
