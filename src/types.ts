export type Food = {
    category_key: string;
    cookTime?: { instructions: string; time: string };
    id: number;
    image_url: string;
    info?: string;
    ingredients?: string[];
    instructions?: string | string[];
    name: string;
    toppings?: string[];
};

export type MenuSelection = "all" | string;
