type Props = { size?: number };

export const SearchIcon = ({ size = 20 }: Props) => (
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
		<circle cx="11" cy="11" r="7" />
		<line x1="21" x2="16.65" y1="21" y2="16.65" />
	</svg>
);
