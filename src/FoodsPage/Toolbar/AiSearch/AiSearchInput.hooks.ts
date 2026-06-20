import { type FormEvent, type RefObject, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import { buildTopCategoryPath, getErrorMessage } from "./AiSearchInput.helpers";
import { parseNaturalLanguageFilter } from "../../../ai/parseNaturalLanguageFilter";
import { useFoodFilters } from "../../../context/foodFilters";
import { useUrlParams } from "../../../hooks/useUrlParams";

type UseAiSearchResult = {
	error: string | null;
	handleSubmit: (e: FormEvent) => Promise<void>;
	inputRef: RefObject<HTMLInputElement | null>;
	isLoading: boolean;
	setValue: (value: string) => void;
	value: string;
};

export const useAiSearch = (onClose: () => void): UseAiSearchResult => {
	const { setDifficulty, setSearch, setSort, setSubCategory } =
		useFoodFilters();
	const { urlLocation } = useUrlParams();
	const navigate = useNavigate();
	const [value, setValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const trimmed = value.trim();

		if (!trimmed) return;

		setIsLoading(true);
		setError(null);

		try {
			const result = await parseNaturalLanguageFilter(trimmed);

			setSearch(result.search);
			setDifficulty(result.difficulty);
			setSubCategory(result.subCategory);

			if (result.sort !== null) {
				setSort(result.sort);
			}

			if (result.topCategory !== null) {
				navigate(buildTopCategoryPath(urlLocation, result.topCategory));
			}

			onClose();
		} catch (err) {
			setError(getErrorMessage(err));
		} finally {
			setIsLoading(false);
		}
	};

	return { error, handleSubmit, inputRef, isLoading, setValue, value };
};
