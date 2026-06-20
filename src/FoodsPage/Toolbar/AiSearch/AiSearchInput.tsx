import { useEffect } from "react";

import { useAiSearch } from "./useAiSearch";
import { FilterSection } from "../../../FilterSection/FilterSection";
import { useEscapeKey } from "../../../hooks/useEscapeKey";

import "./AiSearchInput.scss";

type AiSearchInputProps = {
	onClose: () => void;
};

export const AiSearchInput = ({ onClose }: AiSearchInputProps) => {
	const { error, handleSubmit, inputRef, isLoading, setValue, value } =
		useAiSearch(onClose);

	useEscapeKey(onClose);

	useEffect(() => {
		inputRef.current?.focus();
	}, [inputRef]);

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
