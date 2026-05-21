import { Link } from "react-router-dom";

import { useCardView } from "../context/cardView";
import { useFoodFilters } from "../context/foodFilters";

import "./AppTitle.scss";

export const AppTitle = () => {
	const { resetAll: resetCardView } = useCardView();
	const { resetAll: resetFilters } = useFoodFilters();

	const onClick = () => {
		resetCardView();
		resetFilters();
	};

	return (
		<h1 id="top">
			<Link className="app-title" onClick={onClick} to="/">
				Food Cards
			</Link>
		</h1>
	);
};
