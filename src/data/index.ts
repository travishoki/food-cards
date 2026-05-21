import { DRINKS_FOODS } from "./drinks/drinks";
import { BREAKFAST_FOODS } from "./main/breakfast";
import { ENTREE_FOODS } from "./main/entree";
import { SIDES_FOODS } from "./sides/sides";
import { DAIRY_FOODS } from "./snack/dairy";
import { FRUIT_FOODS } from "./snack/fruit";
import { GRAINS_FOODS } from "./snack/grains";
import { PROTEIN_FOODS } from "./snack/protein";
import { VEGETABLES_FOODS } from "./snack/vegetables";
import { CANDY_FOODS } from "./sweets/candy";
import { DESSERT_FOODS } from "./sweets/dessert";

export const FOODS = [
	...BREAKFAST_FOODS,
	...CANDY_FOODS,
	...DAIRY_FOODS,
	...DESSERT_FOODS,
	...DRINKS_FOODS,
	...FRUIT_FOODS,
	...GRAINS_FOODS,
	...PROTEIN_FOODS,
	...SIDES_FOODS,
	...ENTREE_FOODS,
	...VEGETABLES_FOODS,
];
