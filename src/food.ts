import type { Food } from "./types";
import sugarFatSalt1 from './assets/backgrounds/1-red.png';
import fatsOils2 from './assets/backgrounds/2-yellow.png';
import protien3 from './assets/backgrounds/3-orange.png';
import dairy4 from './assets/backgrounds/4-blue.png';
import grains5 from './assets/backgrounds/5-purple.png';
import vegitablesFruit6 from './assets/backgrounds/6-green.png';

export const foods: Food[] = [
    {
        id: 1,
        name: "Donut",
        image: sugarFatSalt1
    },
    {
        id: 2,
        name: "Texas Toast",
        image: fatsOils2
    },
    {
        id: 3,
        name: "Peanut Butter",
        image: protien3
    },
    {
        id: 4,
        name: "Milk",
        image: dairy4
    },
    {
        id: 5,
        name: "Mashed Potatoes",
        image: grains5
    },
    {
        id: 6,
        name: "Grapes",
        image: vegitablesFruit6
    }
]