import type { Food, FoodGroup } from "../../types";

// Backgrounds
import sugarFatSalt1 from "../backgrounds/1-red.png";

// Foods
import glazedDonut from "../image/sugar-fat-salt/glazed-donut.jpg";

// Icons
import fruit from "../icons/fruit.png";

const SugarFatSalt: FoodGroup = {
    icon: fruit
}

export const sugarFatSaltList: Food[] = [
    {
        id: 1,
        name: "Donut",
        background: sugarFatSalt1,
        foodGroup: SugarFatSalt,
        image: glazedDonut,
    },
];
