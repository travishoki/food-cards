import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../firebase/firebase";

import type { Food } from "../types";

const foodsCollection = collection(db, "food-items");

export const getFoods = async (): Promise<Food[]> => {
	const snapshot = await getDocs(foodsCollection);

	return snapshot.docs.map(
		(doc) => ({ id: doc.id, ...doc.data() }) as unknown as Food,
	);
};

export const getFoodBySlug = async (slug: string): Promise<Food> => {
	const q = query(foodsCollection, where("slug", "==", slug));
	const snapshot = await getDocs(q);

	if (snapshot.empty) throw new Error(`Food not found: ${slug}`);

	const doc = snapshot.docs[0];

	return { id: doc.id, ...doc.data() } as unknown as Food;
};
