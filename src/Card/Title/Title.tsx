import "./Title.scss";

type TitleProps = {
	name: string;
};

export const Title = ({ name }: TitleProps) => (
	<p className="card-title">{name}</p>
);
