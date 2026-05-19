import { CARD_INFO_PADDING_BOTTOM, TOPPINGS_FONT_SIZE } from "../Card.const";
import { useCardRatio } from "../CardRatioContext";
import "./Toppings.scss";

type ToppingsProps = {
	items: string[];
};

export const Toppings = ({ items }: ToppingsProps) => {
	const cardRatio = useCardRatio();
	const fontSize = TOPPINGS_FONT_SIZE * cardRatio;
	const paddingBottom = CARD_INFO_PADDING_BOTTOM * cardRatio;

	return (
		<div
			className="toppings"
			style={{
				fontSize: `${fontSize}px`,
				paddingBottom: `${paddingBottom}px`,
			}}
		>
			<span className="toppings__label">Toppings:</span>
			<ul>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};
