import "./Icon.scss";

type IconProps = {
	categoryKey: string;
};

export const Icon = ({ categoryKey }: IconProps) => (
	<img
		alt=""
		className="iconImg"
		loading="lazy"
		src={`/icons/${categoryKey}.png`}
	/>
);
