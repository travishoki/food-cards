export function foodBySlug<T extends { slug: string }>(
	foods: T[],
	slug: string,
) {
	return foods.find((f) => f.slug === slug);
}

export function toFoodSlug(name: string): string {
	return name
		.replace(/&/g, "and")
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-]/g, "");
}
