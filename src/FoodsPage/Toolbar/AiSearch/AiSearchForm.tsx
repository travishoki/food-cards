import { type FormEvent, type RefObject } from "react";

type AiSearchFormProps = {
	inputRef: RefObject<HTMLInputElement | null>;
	isLoading: boolean;
	onSubmit: (e: FormEvent) => void;
	setValue: (value: string) => void;
	value: string;
};

export const AiSearchForm = ({
	inputRef,
	isLoading,
	onSubmit,
	setValue,
	value,
}: AiSearchFormProps) => (
	<form className="ai-search" onSubmit={onSubmit}>
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
);
