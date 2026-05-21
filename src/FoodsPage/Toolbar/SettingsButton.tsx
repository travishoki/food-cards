import { Badge } from "./Badge";
import { useCardView } from "../../context/cardView";
import { GearIcon } from "../../icons/GearIcon";

type SettingsButtonProps = {
	isOpen: boolean;
	onToggle: () => void;
};

export const SettingsButton = ({ isOpen, onToggle }: SettingsButtonProps) => {
	const { prereleaseMode, viewMode } = useCardView();

	return (
		<button
			aria-expanded={isOpen}
			aria-label="View settings"
			className="toolbar__button"
			onClick={onToggle}
			type="button"
		>
			<GearIcon />
			{(viewMode !== "full" || prereleaseMode !== "hide") && <Badge />}
		</button>
	);
};
