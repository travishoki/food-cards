import { InStockMode } from "../context/cardView";

export const OPTIONS: {
	label: string;
	value: InStockMode;
}[] = [
	{ label: "Show", value: "show" },
	{ label: "Hide", value: "hide" },
	{ label: "Only", value: "only" },
];
