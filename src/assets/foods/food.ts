import type { Food } from "../../types";
import { dairyFoods } from "./dairy";
import { fatsOilsFoods } from "./fats-oils";
import { fruitAndVegiFoods } from "./fruit-and-vegi";
import { grainsFoods } from "./grains";
import { protienFoods } from "./protien";
import { sugarFatSaltFoods } from "./sugar-fat-salt";

export const foods: Food[] = [
    ...dairyFoods,
    ...fatsOilsFoods,
    ...fruitAndVegiFoods,
    ...grainsFoods,
    ...protienFoods,
    ...sugarFatSaltFoods,
]