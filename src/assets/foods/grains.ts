import type { Food, FoodGroup } from "../../types";

// Backgrounds
import grains5 from "../backgrounds/5-purple.png";

// Foods
import mashedPotatoes from "../image/mashed-potatoes.jpg";

// Icons
import fruit from "../icons/fruit.png";

const Grains: FoodGroup = {
    icon: fruit
}

export const grainsFoods: Food[] = [
    {
        id: 5,
        name: "Mashed Potatoes",
        background: grains5,
        foodGroup: Grains,
        image: mashedPotatoes,
    },
];
