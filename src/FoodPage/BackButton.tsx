import { useNavigate, useParams } from "react-router-dom";

import "./BackButton.scss";

export const BackButton = () => {
	const navigate = useNavigate();
	const { location } = useParams<{ location?: string }>();

	const onClick = () => {
		navigate(location ? `/${location}` : "/");
	};

	return (
		<button
			className="category-menu__link back-button"
			onClick={onClick}
			type="button"
		>
			Back
		</button>
	);
};
