import { GRAPHIC_HEIGHT, GRAPHIC_TOP, GRAPHIC_WIDTH } from "../Card.const";
import { getCenteredLeft } from "../Card.helpers";
import { useCard } from "../CardContext";
import "./Graphic.scss";

type GraphicProps = {
	fullWidth?: boolean;
	name: string;
	src: string;
};

export const Graphic = ({ fullWidth, name, src }: GraphicProps) => {
	const { cardRatio, cardWidth } = useCard();

	const width = fullWidth ? cardWidth : GRAPHIC_WIDTH * cardRatio;
	const height = fullWidth
		? cardWidth * (GRAPHIC_HEIGHT / GRAPHIC_WIDTH)
		: GRAPHIC_HEIGHT * cardRatio;
	const left = fullWidth ? 0 : getCenteredLeft(width, cardWidth);
	const top = fullWidth ? 0 : GRAPHIC_TOP * cardRatio;

	return (
		<img
			alt={name}
			className="graphicImg"
			height={height}
			onError={(e) => {
				e.currentTarget.src = "/missing/missing.jpg";
			}}
			src={src}
			style={{
				left: `${left}px`,
				top: `${top}px`,
			}}
			width={width}
		/>
	);
};
