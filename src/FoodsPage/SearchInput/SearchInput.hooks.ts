import { type RefObject, useEffect, useRef, useState } from "react";

import { useFoodFilters } from "../../context/foodFilters";
import { useEscapeKey } from "../../hooks/useEscapeKey";

const SEARCH_DEBOUNCE_MS = 250;

type UseSearchInputResult = {
	inputRef: RefObject<HTMLInputElement | null>;
	setValue: (value: string) => void;
	value: string;
};

export const useSearchInput = (onClose: () => void): UseSearchInputResult => {
	const { search, setSearch } = useFoodFilters();
	const [value, setValue] = useState(search);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const id = setTimeout(() => setSearch(value), SEARCH_DEBOUNCE_MS);

		return () => clearTimeout(id);
	}, [value, setSearch]);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	useEffect(() => {
		setValue(search);
	}, [search]);

	useEscapeKey(onClose);

	return { inputRef, setValue, value };
};
