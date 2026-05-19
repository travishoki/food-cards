import { TITLE_FONT_SIZE, TITLE_TOP } from "../Card.const";
import { getSidePadding } from "../Card.helpers";
import { useCardRatio } from "../CardRatioContext";
import "./Title.scss";

type TitleProps = {
	name: string;
};

export const Title = ({ name }: TitleProps) => {
	const cardRatio = useCardRatio();
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
