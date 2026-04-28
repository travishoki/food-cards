import type { Food } from "../../types";
import { fruitAndVegiFoods } from "./fruit-and-vegi";
import { fatsOilsFoods } from "./fats-oils";
import { protienFoods } from "./protien";
import { dairyFoods } from "./dairy";
import { grainsFoods } from "./grains";

export const foods: Food[] = [
    ...fruitAndVegiFoods,
    ...fatsOilsFoods,
    ...protienFoods,
    ...dairyFoods,
    ...grainsFoods,
]