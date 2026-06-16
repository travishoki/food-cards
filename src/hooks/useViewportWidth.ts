import { useEffect, useState } from "react";

const DEFAULTED_WIDTH = 1024;

const getWidth = () =>
	typeof document === "undefined"
		? DEFAULTED_WIDTH
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
