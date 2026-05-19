import {
	CARD_INFO_PADDING_BOTTOM,
	INSTRUCTIONS_FONT_SIZE,
} from "../Card.const";
import { useCardRatio } from "../CardRatioContext";
import "./Instructions.scss";

type InstructionsProps = {
	text: string | string[];
};

export const Instructions = ({ text }: InstructionsProps) => {
	const cardRatio = useCardRatio();
	const fontSize = INSTRUCTIONS_FONT_SIZE * cardRatio;
	const paddingBottom = CARD_INFO_PADDING_BOTTOM * cardRatio;
	const style = {
		fontSize: `${fontSize}px`,
		paddingBottom: `${paddingBottom}px`,
	};

	return (
		<div className="instructions" style={style}>
			{Array.isArray(text) ? (
				<ol>
					{text.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ol>
			) : (
				<p>{text}</p>
			)}
		</div>
	);
};
