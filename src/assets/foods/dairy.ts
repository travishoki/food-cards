import type { Food, FoodGroup } from "../../types";

// Backgrounds
import dairy4 from "../backgrounds/4-blue.png";

// Foods
import milk from "../image/dairy/milk.jpg";

// Icons
import dairy from "../icons/dairy.png";

const Dairy: FoodGroup = {
    icon: dairy
}

export const dairyFoods: Food[] = [
    {
        id: 4,
        name: "Milk",
        background: dairy4,
        foodGroup: Dairy,
        image: milk,
    },
];
