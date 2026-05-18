import { useEffect, useState } from "react";

import "./SearchInput.scss";

const SEARCH_DEBOUNCE_MS = 250;

type SearchInputProps = {
	onDebouncedChange: (value: string) => void;
	resetKey?: string;
};

export const SearchInput = ({
	onDebouncedChange,
	resetKey,
}: SearchInputProps) => {
	const [value, setValue] = useState("");

	useEffect(() => {
		const id = setTimeout(
			() => onDebouncedChange(value),
			SEARCH_DEBOUNCE_MS,
		);

		return () => clearTimeout(id);
	}, [value, onDebouncedChange]);

	useEffect(() => {
		setValue("");
		onDebouncedChange("");
	}, [resetKey, onDebouncedChange]);

	return (
		<input
			className="food-search"
			onChange={(e) => setValue(e.target.value)}
			placeholder="Search foods…"
			type="search"
			value={value}
		/>
	);
};
