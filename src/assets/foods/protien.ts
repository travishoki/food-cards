import type { Food, FoodGroup } from "../../types";

// Backgrounds
import protien3 from "../backgrounds/3-orange.png";

// Foods
import peanutButter from "../image/protien/peanut-butter.jpg";

// Icons
import fruit from "../icons/fruit.png";

const Protien: FoodGroup = {
    icon: fruit
}

export const protienFoods: Food[] = [
    {
        id: 3,
        name: "Peanut Butter",
        background: protien3,
        foodGroup: Protien,
        image: peanutButter,
    },
];
