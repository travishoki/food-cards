import type { Food, FoodGroup } from "../../types";

// Backgrounds
import sugarFatSalt1 from "../backgrounds/1-red.png";
import vegitablesFruit6 from "../backgrounds/6-green.png";

// Foods
import glazedDonut from "../image/glazed-donut.jpg";
import grapes from "../image/grapes.jpg";

// Icons
import fruit from "../icons/fruit.png";

const FruitAndVegi: FoodGroup = {
    icon: fruit
}

export const fruitAndVegiFoods: Food[] = [
    {
        id: 1,
        name: "Donut",
        background: sugarFatSalt1,
        foodGroup: FruitAndVegi,
        image: glazedDonut,
    },
    {
        id: 6,
        name: "Grapes",
        background: vegitablesFruit6,
        foodGroup: FruitAndVegi,
        image: grapes,
    },
];
