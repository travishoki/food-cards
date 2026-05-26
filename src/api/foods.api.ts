import {
	addDoc,
	collection,
	doc,
	getDocs,
	query,
	updateDoc,
	where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import type { Food } from "../types";

const foodsCollection = collection(db, "food-items");

export const getFoods = async (): Promise<Food[]> => {
	const snapshot = await getDocs(foodsCollection);

	return snapshot.docs.map(
		(document) =>
			({ docId: document.id, ...document.data() }) as unknown as Food,
	);
};

export const updateFoodInStock = async (
	docId: string,
	inStock: boolean,
): Promise<void> => {
	await updateDoc(doc(db, "food-items", docId), { inStock });
};

export const addFoodActivity = async (
	slug: string,
	inStock: boolean,
): Promise<string> => {
	const docRef = await addDoc(foodsCollection, { inStock, slug });

	return docRef.id;
};

export const getFoodBySlug = async (slug: string): Promise<Food> => {
	const q = query(foodsCollection, where("slug", "==", slug));
	const snapshot = await getDocs(q);

	if (snapshot.empty) throw new Error(`Food not found: ${slug}`);

	const doc = snapshot.docs[0];

	return { docId: doc.id, ...doc.data() } as unknown as Food;
};
