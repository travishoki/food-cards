import "./Toppings.scss";

type ToppingsProps = {
	items: string[];
};

export const Toppings = ({ items }: ToppingsProps) => (
	<div className="toppings">
		<span className="toppings__label">Toppings:</span>
		<ul>
			{items.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ul>
	</div>
);
