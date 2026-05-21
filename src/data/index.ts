import { BREAKFAST_FOODS } from "./breakfast";
import { DAIRY_FOODS } from "./dairy";
import { DRINKS_FOODS } from "./drinks";
import { ENTREE_FOODS } from "./entree";
import { FRUIT_FOODS } from "./fruit";
import { GRAINS_FOODS } from "./grains";
import { PROTEIN_FOODS } from "./protein";
import { SIDES_FOODS } from "./sides";
import { CANDY_FOODS } from "./sweets/candy";
import { DESSERT_FOODS } from "./sweets/dessert";
import { VEGETABLES_FOODS } from "./vegetables";

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
