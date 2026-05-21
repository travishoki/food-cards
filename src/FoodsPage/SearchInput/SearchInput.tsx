import { useEffect, useRef, useState } from "react";

import { FilterSection } from "../../FilterSection/FilterSection";

import "./SearchInput.scss";

const SEARCH_DEBOUNCE_MS = 250;

type SearchInputProps = {
	onClose: () => void;
	onDebouncedChange: (value: string) => void;
	resetKey?: string;
};

export const SearchInput = ({
	onClose,
	onDebouncedChange,
	resetKey,
}: SearchInputProps) => {
	const [value, setValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

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
