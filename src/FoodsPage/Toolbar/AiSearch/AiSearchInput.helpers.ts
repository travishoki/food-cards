import { type Location, LOCATIONS } from "../../../const/locations.const";

export const buildTopCategoryPath = (
	urlLocation: Location,
	topCategory: string,
): string => {
	const base = urlLocation === LOCATIONS.home ? "" : `/${urlLocation}`;

	return `${base}/${topCategory}`;
};

export const getErrorMessage = (err: unknown): string =>
	err instanceof Error ? err.message : "Something went wrong.";
