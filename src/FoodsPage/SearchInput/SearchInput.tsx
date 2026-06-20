import { useSearchInput } from "./useSearchInput";
import { FilterSection } from "../../FilterSection/FilterSection";

import "./SearchInput.scss";

type SearchInputProps = {
	onClose: () => void;
};

export const SearchInput = ({ onClose }: SearchInputProps) => {
	const { inputRef, setValue, value } = useSearchInput(onClose);

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
