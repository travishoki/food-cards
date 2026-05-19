import { GRAPHIC_HEIGHT, GRAPHIC_TOP, GRAPHIC_WIDTH } from "../Card.const";
import { getCenteredLeft } from "../Card.helpers";
import { useCard } from "../CardContext";
import "./Graphic.scss";

type GraphicProps = {
	name: string;
	src: string;
};

export const Graphic = ({ name, src }: GraphicProps) => {
	const { cardRatio, cardWidth } = useCard();
	const width = GRAPHIC_WIDTH * cardRatio;
	const height = GRAPHIC_HEIGHT * cardRatio;

	const left = getCenteredLeft(width, cardWidth);
	const top = GRAPHIC_TOP * cardRatio;

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
