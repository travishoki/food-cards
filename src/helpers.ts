export function toFoodSlug(name: string) {
	return name
		.replace(/&/g, "and")
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-]/g, "");
}

export function fromFoodSlug(slug: string) {
	return slug
		.replace(/-and-/g, " & ")
		.replace(/-/g, " ")
		.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function foodBySlug(foods: { name: string }[], slug: string) {
	return foods.find((f) => toFoodSlug(f.name) === slug);
}
