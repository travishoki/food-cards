export function foodBySlug<T extends { slug: string }>(
	foods: T[],
	slug: string,
) {
	return foods.find((f) => f.slug === slug);
}
