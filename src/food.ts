import type { Food } from "./types";

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

export const foods: Food[] = [
    {
        id: 1,
        name: "Donut",
        background: sugarFatSalt1,
        image: glazedDonut,
    },
    {
        id: 2,
        name: "Texas Toast",
        background: fatsOils2,
        image: texasToast,
    },
    {
        id: 3,
        name: "Peanut Butter",
        background: protien3,
        image: peanutButter,
    },
    {
        id: 4,
        name: "Milk",
        background: dairy4,
        image: milk,
    },
    {
        id: 5,
        name: "Mashed Potatoes",
        background: grains5,
        image: mashedPotatoes,
    },
    {
        id: 6,
        name: "Grapes",
        background: vegitablesFruit6,
        image: grapes,
    }
]