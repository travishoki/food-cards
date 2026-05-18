import { useCallback, useState } from "react";

import { useParams } from "react-router-dom";

import { FoodList } from "./FoodList/FoodList";
import { SearchInput } from "./SearchInput/SearchInput";

export const FoodsPage = () => {
	const { subCategory, topCategory } = useParams<{
		subCategory?: string;
		topCategory?: string;
	}>();

	const [debouncedSearch, setDebouncedSearch] = useState("");

	const handleDebouncedChange = useCallback(
		(value: string) => setDebouncedSearch(value),
		[],
	);

	return (
		<>
			<SearchInput
				onDebouncedChange={handleDebouncedChange}
				resetKey={`${topCategory ?? ""}/${subCategory ?? ""}`}
			/>
			<FoodList
				search={debouncedSearch}
				subCategory={subCategory}
				topCategory={topCategory}
			/>
		</>
	);
};
