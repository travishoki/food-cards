import { useMemo } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { FilterSection } from "../../FilterSection/FilterSection";
import { topMenuItems } from "../CategoryMenu.helpers";

export const Menu = () => {
	const { topCategory } = useParams<{ topCategory?: string }>();
	const navigate = useNavigate();

	const topMenu = useMemo(() => topMenuItems(), []);

	return (
		<FilterSection ariaLabel="Food categories" label="Category:">
			{topMenu.map((cat) => {
				const path = cat.defaultSubCategory
					? `/${cat.key}/${cat.defaultSubCategory}`
					: `/${cat.key}`;

				return (
					<button
						key={cat.key}
						className={`category-menu__link ${topCategory === cat.key ? "is-active" : ""}`}
						onClick={() => navigate(path)}
						type="button"
					>
						{cat.label}
					</button>
				);
			})}
		</FilterSection>
	);
};
