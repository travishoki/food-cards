import type { Food, FoodGroup } from "./types";

// Backgrounds
import sugarFatSalt1 from './assets/backgrounds/1-red.png';
import fatsOils2 from './assets/backgrounds/2-yellow.png';
import protien3 from './assets/backgrounds/3-orange.png';
import dairy4 from './assets/backgrounds/4-blue.png';
import grains5 from './assets/backgrounds/5-purple.png';
import vegitablesFruit6 from './assets/backgrounds/6-green.png';

// Foods
import glazedDonut from './assets/food/glazed-donut.jpg';
import grapes from './assets/food/grapes.jpg';
import mashedPotatoes from './assets/food/mashed-potatoes.jpg';
import milk from './assets/food/milk.jpg';
import peanutButter from './assets/food/peanut-butter.jpg';
import texasToast from './assets/food/texas-toast.jpg';

// Icons
import fruit from './assets/icons/fruit.png';
import dairy from './assets/icons/dairy.png';

const FruitAndVegi: FoodGroup = {
    icon: fruit
}
const Dairy: FoodGroup = {
    icon: dairy
}

export const foods: Food[] = [
    {
        id: 1,
        name: "Donut",
        background: sugarFatSalt1,
        foodGroup: FruitAndVegi,
        image: glazedDonut,
    },
    {
        id: 2,
        name: "Texas Toast",
        background: fatsOils2,
        foodGroup: FruitAndVegi,
        image: texasToast,
    },
    {
        id: 3,
        name: "Peanut Butter",
        background: protien3,
        foodGroup: FruitAndVegi,
        image: peanutButter,
    },
    {
        id: 4,
        name: "Milk",
        background: dairy4,
        foodGroup: Dairy,
        image: milk,
    },
    {
        id: 5,
        name: "Mashed Potatoes",
        background: grains5,
        foodGroup: FruitAndVegi,
        image: mashedPotatoes,
    },
    {
        id: 6,
        name: "Grapes",
        background: vegitablesFruit6,
        foodGroup: FruitAndVegi,
        image: grapes,
    }
]