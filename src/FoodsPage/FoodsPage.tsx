import { useCallback, useState } from "react";

import { useParams } from "react-router-dom";

import { CardViewToggle } from "../CardViewToggle/CardViewToggle";
import { FoodList } from "./FoodList/FoodList";
import { SearchInput } from "./SearchInput/SearchInput";

export const FoodsPage = () => {
	const { subCategory, topCategory } = useParams<{
		subCategory?: string;
		topCategory?: string;
	}>();

	const [debouncedSearch, setDebouncedSearch] = useState("");
	const [clearCount, setClearCount] = useState(0);

	const handleDebouncedChange = useCallback(
		(value: string) => setDebouncedSearch(value),
		[],
	);

	const handleClearSearch = useCallback(
		() => setClearCount((c) => c + 1),
		[],
	);

	return (
		<>
			<SearchInput
				onDebouncedChange={handleDebouncedChange}
				resetKey={String(clearCount)}
			/>
			<CardViewToggle />
			<FoodList
				onClearSearch={handleClearSearch}
				search={debouncedSearch}
				subCategory={subCategory}
				topCategory={topCategory}
			/>
		</>
	);
};
