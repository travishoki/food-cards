import { useEffect, useState } from "react";

import { ChevronUpIcon } from "../../icons/ChevronUpIcon";

import "./BackToTop.scss";

const SHOW_AFTER_PX = 300;

export const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX);

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onClick = () =>
		window.scrollTo({ behavior: "smooth", left: 0, top: 0 });

	return (
		<button
			aria-label="Back to top"
			className={`back-to-top ${isVisible ? "is-visible" : ""}`}
			onClick={onClick}
			type="button"
		>
			<ChevronUpIcon />
		</button>
	);
};
