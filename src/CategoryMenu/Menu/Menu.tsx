import { useMemo } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { topMenuItems } from "../CategoryMenu.helpers";

export const Menu = () => {
	const { topCategory } = useParams<{ topCategory?: string }>();
	const navigate = useNavigate();

	const topMenu = useMemo(() => topMenuItems(), []);

	return (
		<nav aria-label="Food categories" className="category-menu">
			<span className="category-menu__label">Category:</span>
			<button
				className={`category-menu__link ${!topCategory ? "is-active" : ""}`}
				onClick={() => navigate("/")}
				type="button"
			>
				All
			</button>
			{topMenu.map((cat) => (
				<button
					key={cat.key}
					className={`category-menu__link ${topCategory === cat.key ? "is-active" : ""}`}
					onClick={() => navigate(`/${cat.key}`)}
					type="button"
				>
					{cat.label}
				</button>
			))}
		</nav>
	);
};
