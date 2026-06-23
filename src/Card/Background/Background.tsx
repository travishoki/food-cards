import "./Background.scss";

type BackgroundProps = {
	categoryKey: string;
};

export const Background = ({ categoryKey }: BackgroundProps) => (
	<img
		alt=""
		className="cardBg"
		loading="lazy"
		src={`/images/backgrounds/${categoryKey}.png`}
	/>
);
