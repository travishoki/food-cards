Find any food items that are missing a corresponding image in `public/graphics/` and copy `public/missing/missing.jpg` as a placeholder for each one.

The image path for each food item is derived as:
`public/graphics/{top_category}/{category_key}/{slug}.jpg`

Where the slug is computed by `toFoodSlug` in `src/helpers/slug.helpers.ts`:

- Replace `&` with `and`
- Lowercase
- Replace whitespace with `-`
- Strip any character that is not `a-z`, `0-9`, or `-`

The top category mapping (subcategory → top):

- `breakfast`, `entree` → `main`
- `sides` → `sides`
- `dairy`, `fruit`, `grains`, `protein`, `vegetables` → `snack`
- `candy`, `dessert` → `sweets`
- `drinks` → `drinks`

Run the following steps:

1. Use the Bash tool to execute this Node.js script from the project root to find all missing images:

```js
const fs = require("fs");
const path = require("path");

function toFoodSlug(name) {
	return name
		.replace(/&/g, "and")
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^a-z0-9-]/g, "");
}

const TOP_OF_SUB = {
	breakfast: "main",
	entree: "main",
	sides: "sides",
	dairy: "snack",
	fruit: "snack",
	grains: "snack",
	protein: "snack",
	vegetables: "snack",
	candy: "sweets",
	dessert: "sweets",
	drinks: "drinks",
};

function extractNames(filePath) {
	const src = fs.readFileSync(filePath, "utf8");
	const results = [];
	for (const m of src.matchAll(/^\t\"([^\"]+)\",/gm)) results.push(m[1]);
	for (const m of src.matchAll(/name:\s*\"([^\"]+)\"/g)) results.push(m[1]);
	return results;
}

const categories = {
	drinks: { file: "src/data/drinks/drinks.ts", key: "drinks" },
	breakfast: { file: "src/data/main/breakfast.ts", key: "breakfast" },
	entree: { file: "src/data/main/entree.ts", key: "entree" },
	sides: { file: "src/data/sides/sides.ts", key: "sides" },
	dairy: { file: "src/data/snack/dairy.ts", key: "dairy" },
	fruit: { file: "src/data/snack/fruit.ts", key: "fruit" },
	grains: { file: "src/data/snack/grains.ts", key: "grains" },
	protein: { file: "src/data/snack/protein.ts", key: "protein" },
	vegetables: { file: "src/data/snack/vegetables.ts", key: "vegetables" },
	candy: { file: "src/data/sweets/candy.ts", key: "candy" },
	dessert: { file: "src/data/sweets/dessert.ts", key: "dessert" },
};

const missing = [];
for (const [, { file, key }] of Object.entries(categories)) {
	const top = TOP_OF_SUB[key];
	for (const name of extractNames(file)) {
		const imgPath = `public/graphics/${top}/${key}/${toFoodSlug(name)}.jpg`;
		if (!fs.existsSync(imgPath)) missing.push({ name, imgPath });
	}
}

if (missing.length === 0) console.log("All images present!");
else
	missing.forEach(({ name, imgPath }) =>
		console.log(`MISSING\t${name}\t${imgPath}`),
	);
```

2. If the output is `All images present!`, report that and stop.

3. Otherwise, for each missing path, use the Bash tool to:
    - Create the directory if needed: `mkdir -p <dir>`
    - Copy the placeholder: `cp public/missing/missing.jpg <path>`

4. Re-run the check script to confirm zero missing images remain.

5. Report a summary of what was created, grouped by category directory.
