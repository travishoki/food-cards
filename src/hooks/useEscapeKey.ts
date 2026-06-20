import { useEffect } from "react";

export const useEscapeKey = (onEscape: () => void): void => {
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onEscape();
		};

		window.addEventListener("keydown", onKey);

		return () => window.removeEventListener("keydown", onKey);
	}, [onEscape]);
};
