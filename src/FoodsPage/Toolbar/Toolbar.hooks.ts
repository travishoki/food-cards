import { useState } from "react";

import { useEscapeKey } from "../../hooks/useEscapeKey";

type Panel = "ai" | "filter" | "search" | "settings" | "sort";

type UseToolbarPanelResult = {
	close: () => void;
	openPanel: Panel | null;
	toggle: (p: Panel) => void;
};

export const useToolbarPanel = (): UseToolbarPanelResult => {
	const [openPanel, setOpenPanel] = useState<Panel | null>(null);

	const toggle = (p: Panel) =>
		setOpenPanel((curr) => (curr === p ? null : p));

	const close = () => setOpenPanel(null);

	useEscapeKey(close);

	return { close, openPanel, toggle };
};
