import { useEffect } from "react";

import { AiSearchError } from "./AiSearchError";
import { AiSearchForm } from "./AiSearchForm";
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
			<AiSearchForm
				inputRef={inputRef}
				isLoading={isLoading}
				onSubmit={handleSubmit}
				setValue={setValue}
				value={value}
			/>
			<AiSearchError error={error} />
		</FilterSection>
	);
};
