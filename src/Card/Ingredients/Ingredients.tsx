import "./Ingredients.scss";

type IngredientsProps = {
	items: string[];
};

export const Ingredients = ({ items }: IngredientsProps) => (
	<div className="ingredients">
		<span className="ingredients__label">Ingredients:</span>
		<ul>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	</div>
);
