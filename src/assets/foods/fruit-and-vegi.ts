import type { Food, FoodGroup } from "../../types";

// Backgrounds
import vegitablesFruit6 from "../backgrounds/6-green.png";

// Foods
import grapes from "../image/fruit-and-vegi/grapes.jpg";

// Icons
import fruit from "../icons/fruit.png";

const FruitAndVegi: FoodGroup = {
    icon: fruit
}

export const fruitAndVegiList: Food[] = [
    {
        id: 6,
        name: "Grapes",
        background: vegitablesFruit6,
        foodGroup: FruitAndVegi,
        image: grapes,
    },
];
