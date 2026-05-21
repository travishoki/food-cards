export const LOCATIONS = {
	"fast-food": "fast-food",
	home: "home",
	restaurant: "restaurant",
} as const;

export type Location = (typeof LOCATIONS)[keyof typeof LOCATIONS];

export const LOCATION_ORDER: Location[] = [
	LOCATIONS.home,
	LOCATIONS["fast-food"],
	LOCATIONS.restaurant,
];

export const LOCATION_DATA: Record<Location, { label: string }> = {
	"fast-food": { label: "Fast Food" },
	home: { label: "Home" },
	restaurant: { label: "Restaurant" },
};
