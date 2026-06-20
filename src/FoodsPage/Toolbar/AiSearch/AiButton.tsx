import { SparklesIcon } from "../../../icons/SparklesIcon";

type AiButtonProps = {
	isOpen: boolean;
	onToggle: () => void;
};

export const AiButton = ({ isOpen, onToggle }: AiButtonProps) => (
	<button
		aria-expanded={isOpen}
		aria-label="AI filter"
		className="toolbar__button"
		onClick={onToggle}
		type="button"
	>
		<SparklesIcon />
	</button>
);
