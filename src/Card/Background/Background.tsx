import { useCard } from "../CardContext";

type BackgroundProps = {
	categoryKey: string;
};

export const Background = ({ categoryKey }: BackgroundProps) => {
	const { cardHeight, cardWidth } = useCard();

	return (
		<img
			alt=""
			height={cardHeight}
			src={`/backgrounds/${categoryKey}.png`}
			width={cardWidth}
		/>
	);
};
