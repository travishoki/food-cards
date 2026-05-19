import { useEffect, useState } from "react";

const getWidth = () =>
	typeof document === "undefined"
		? 1024
		: document.documentElement.clientWidth;

export const useViewportWidth = () => {
	const [width, setWidth] = useState(getWidth);

	useEffect(() => {
		const onResize = () => setWidth(getWidth());

		window.addEventListener("resize", onResize);

		return () => window.removeEventListener("resize", onResize);
	}, []);

	return width;
};
