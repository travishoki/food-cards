import { GRAPHIC_HEIGHT, GRAPHIC_TOP, GRAPHIC_WIDTH } from "../Card.const";
import { getCenteredLeft } from "../Card.helpers";
import { useCardRatio } from "../CardRatioContext";
import "./Graphic.scss";

type GraphicProps = {
	cardW: number;
	name: string;
	src: string;
};

export const Graphic = ({ cardW, name, src }: GraphicProps) => {
	const cardRatio = useCardRatio();
	const width = GRAPHIC_WIDTH * cardRatio;
	const height = GRAPHIC_HEIGHT * cardRatio;

	const left = getCenteredLeft(width, cardW);
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
