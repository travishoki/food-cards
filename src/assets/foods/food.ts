import type { Food } from "../../types";
import { dairyList } from "./dairy";
import { fatsOilsList } from "./fats-oils";
import { fruitAndVegiList } from "./fruit-and-vegi";
import { grainsList } from "./grains";
import { protienList } from "./protien";
import { sugarFatSaltList } from "./sugar-fat-salt";

export const foods: Food[] = [
    ...dairyList,
    ...fatsOilsList,
    ...fruitAndVegiList,
    ...grainsList,
    ...protienList,
    ...sugarFatSaltList,
]