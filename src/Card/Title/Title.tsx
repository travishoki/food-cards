import { TITLE_FONT_SIZE, TITLE_TOP } from "../Card.const";
import { getSidePadding } from "../Card.helpers";
import "./Title.css";

type TitleProps = {
	cardRatio: number;
	name: string;
};

export const Title = ({ cardRatio, name }: TitleProps) => {
	const top = TITLE_TOP * cardRatio;
	const left = getSidePadding(cardRatio);
	const fontSize = TITLE_FONT_SIZE * cardRatio;

	return (
		<p
			className="card-title"
			style={{
				fontSize: `${fontSize}px`,
				left: `${left}px`,
				top: `${top}px`,
			}}
		>
			{name}
		</p>
	);
};
