import { useNavigate } from "react-router-dom";

import "./BackButton.scss";

export const BackButton = () => {
	const navigate = useNavigate();

	if (window.history.length <= 1) return null;

	return (
		<button
			className="category-menu__link back-button"
			onClick={() => navigate(-1)}
			type="button"
		>
			Back
		</button>
	);
};
