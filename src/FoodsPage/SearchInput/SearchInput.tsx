import { useEffect, useRef, useState } from "react";

import { FilterSection } from "../../FilterSection/FilterSection";
import { useFoodFilters } from "../../context/foodFilters";

import "./SearchInput.scss";

const SEARCH_DEBOUNCE_MS = 250;

type SearchInputProps = {
	onClose: () => void;
};

export const SearchInput = ({ onClose }: SearchInputProps) => {
	const { setSearch } = useFoodFilters();
	const [value, setValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const id = setTimeout(() => setSearch(value), SEARCH_DEBOUNCE_MS);

		return () => clearTimeout(id);
	}, [value, setSearch]);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		window.addEventListener("keydown", onKey);

		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);

	return (
		<FilterSection label="Search:" labelFor="food-search">
			<input
				className="food-search"
				id="food-search"
				onChange={(e) => setValue(e.target.value)}
				placeholder="Search foods…"
				ref={inputRef}
				type="search"
				value={value}
			/>
		</FilterSection>
	);
};
