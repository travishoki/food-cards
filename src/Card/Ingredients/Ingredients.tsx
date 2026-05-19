import { CARD_INFO_PADDING_BOTTOM, INGREDIENTS_FONT_SIZE } from "../Card.const";
import { useCardRatio } from "../CardContext";
import "./Ingredients.scss";

type IngredientsProps = {
	items: string[];
};

export const Ingredients = ({ items }: IngredientsProps) => {
	const cardRatio = useCardRatio();
	const fontSize = INGREDIENTS_FONT_SIZE * cardRatio;
	const paddingBottom = CARD_INFO_PADDING_BOTTOM * cardRatio;

	return (
		<div
			className="ingredients"
			style={{
				fontSize: `${fontSize}px`,
				paddingBottom: `${paddingBottom}px`,
			}}
		>
			<span className="ingredients__label">Ingredients:</span>
			<ul>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</div>
	);
};
