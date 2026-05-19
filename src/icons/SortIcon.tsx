type Props = { size?: number };

export const SortIcon = ({ size = 20 }: Props) => (
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
		<line x1="4" x2="16" y1="6" y2="6" />
		<line x1="4" x2="12" y1="12" y2="12" />
		<line x1="4" x2="8" y1="18" y2="18" />
	</svg>
);
