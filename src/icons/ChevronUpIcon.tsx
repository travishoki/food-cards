type Props = { size?: number };

export const ChevronUpIcon = ({ size = 24 }: Props) => (
	<svg
		fill="none"
		height={size}
		stroke="currentColor"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width={size}
	>
		<polyline points="18 15 12 9 6 15" />
	</svg>
);
