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

export function fromFoodSlug(slug: string): string {
	return slug
		.replace(/-/g, " ")
		.replace(/\band\b/g, "&")
		.replace(/\b\w/g, (c) => c.toUpperCase());
}
