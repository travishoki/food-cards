import { useParams } from "react-router-dom";

import { TOP_CATEGORIES } from "../const/categories";
import {
	LOCATIONS,
	LOCATION_ORDER,
	type Location,
} from "../const/locations.const";

export type UrlParams = {
	urlLocation: Location;
	urlTopCategory: string;
};

const NON_HOME_LOCATIONS = new Set<string>(
	LOCATION_ORDER.filter((loc) => loc !== LOCATIONS.home),
);

export const useUrlParams = (): UrlParams => {
	const { location, segment, topCategory } = useParams<{
		location?: string;
		segment?: string;
		topCategory?: string;
	}>();

	// /:segment  — segment may be a location (fast-food) or a home category (sweets)
	const segmentIsLocation = !!segment && NON_HOME_LOCATIONS.has(segment);

	const urlLocation =
		(location as Location | undefined) ??
		(segmentIsLocation ? (segment as Location) : LOCATIONS.home);

	const urlTopCategory =
		topCategory ??
		(!segmentIsLocation ? segment : undefined) ??
		TOP_CATEGORIES.main;

	return { urlLocation, urlTopCategory };
};
