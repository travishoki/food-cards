import { Location, LOCATIONS } from "./locations.const";

export const isEatingOut = (location: Location | null): boolean =>
	location === LOCATIONS["fast-food"] || location === LOCATIONS.restaurant;
