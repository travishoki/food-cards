import type { Food, FoodGroup } from "../../types";

// Backgrounds
import fatsOils2 from "../backgrounds/2-yellow.png";

// Foods
import texasToast from "../image/texas-toast.jpg";

// Icons
import fruit from "../icons/fruit.png";

const FatsOils: FoodGroup = {
    icon: fruit
}

export const fatsOilsFoods: Food[] = [
    {
        id: 2,
        name: "Texas Toast",
        background: fatsOils2,
        foodGroup: FatsOils,
        image: texasToast,
    },
];
