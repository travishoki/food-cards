import { useMemo } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { subCategoriesForTop } from "../CategoryMenu.helpers";

export const SubMenu = () => {
	const { subCategory, topCategory } = useParams<{
		subCategory?: string;
		topCategory?: string;
	}>();
	const subMenu = useMemo(
		() => (topCategory ? subCategoriesForTop(topCategory) : []),
		[topCategory],
	);
	const navigate = useNavigate();

	if (subMenu.length <= 1) return null;

	return (
		<nav aria-label="Food subcategories" className="category-menu">
			<span className="category-menu__label">Subcategory:</span>
			<button
				className={`category-menu__link ${!subCategory ? "is-active" : ""}`}
				onClick={() => navigate(`/${topCategory}`)}
				type="button"
			>
				All
			</button>
			{subMenu.map((cat) => (
				<button
					key={cat.key}
					className={`category-menu__link ${subCategory === cat.key ? "is-active" : ""}`}
					onClick={() => navigate(`/${topCategory}/${cat.key}`)}
					type="button"
				>
					{cat.label}
				</button>
			))}
		</nav>
	);
};
