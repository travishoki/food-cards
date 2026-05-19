import "./Icon.scss";

type IconProps = {
	categoryKey: string;
};

export const Icon = ({ categoryKey }: IconProps) => (
	<img alt="" className="iconImg" src={`/icons/${categoryKey}.png`} />
);
