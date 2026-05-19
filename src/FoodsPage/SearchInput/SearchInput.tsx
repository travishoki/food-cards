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
		<>
			<label className="food-search__label" htmlFor="food-search">
				Search foods
			</label>
			<input
				className="food-search"
				id="food-search"
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search foods…"
				type="search"
				value={value}
			/>
		</>
	);
};
