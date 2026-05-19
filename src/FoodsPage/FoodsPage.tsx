import { useCallback, useState } from "react";

import { useParams } from "react-router-dom";

import { BackToTop } from "./BackToTop/BackToTop";
import { FoodList } from "./FoodList/FoodList";
import { Toolbar } from "./Toolbar/Toolbar";

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
			<Toolbar
				hasActiveFilter={!!topCategory || !!subCategory}
				hasActiveSearch={!!debouncedSearch.trim()}
				onDebouncedSearchChange={handleDebouncedChange}
				searchResetKey={String(clearCount)}
			/>
			<FoodList
				onClearSearch={handleClearSearch}
				search={debouncedSearch}
				subCategory={subCategory}
				topCategory={topCategory}
			/>
			<BackToTop />
		</>
	);
};
