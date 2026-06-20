import { FormEvent, useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router-dom";

import { FilterSection } from "../../../FilterSection/FilterSection";
import { parseNaturalLanguageFilter } from "../../../ai/parseNaturalLanguageFilter";
import { TOP_CATEGORY_SUBCATEGORIES } from "../../../const/categories";
import { useFoodFilters } from "../../../context/foodFilters";
import { useUrlParams } from "../../../hooks/useUrlParams";

import "./AiSearchInput.scss";

type AiSearchInputProps = {
	onClose: () => void;
};

export const AiSearchInput = ({ onClose }: AiSearchInputProps) => {
	const { setDifficulty, setSearch, setSort, setSubCategory } =
		useFoodFilters();
	const { urlLocation } = useUrlParams();
	const navigate = useNavigate();
	const [value, setValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

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

			if (result.subCategory !== null) {
				const topCategory = Object.entries(
					TOP_CATEGORY_SUBCATEGORIES,
				).find(([, subs]) => subs.includes(result.subCategory!))?.[0];

				if (topCategory) {
					const base =
						urlLocation === "home" ? "" : `/${urlLocation}`;
					navigate(`${base}/${topCategory}`);
				}
			}

			onClose();
		} catch (err) {
			setError(
				err instanceof Error ? err.message : "Something went wrong.",
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<FilterSection label="AI Filter:" labelFor="ai-search">
			<form className="ai-search" onSubmit={handleSubmit}>
				<input
					className="ai-search__input"
					disabled={isLoading}
					id="ai-search"
					onChange={(e) => setValue(e.target.value)}
					placeholder='e.g. "easy breakfast" or "difficult desserts"'
					ref={inputRef}
					type="text"
					value={value}
				/>
				<button
					className="ai-search__submit"
					disabled={isLoading || !value.trim()}
					type="submit"
				>
					{isLoading ? "…" : "Go"}
				</button>
			</form>
			{error && <p className="ai-search__error">{error}</p>}
		</FilterSection>
	);
};
