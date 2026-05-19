type Props = { size?: number };

export const CloseIcon = ({ size = 20 }: Props) => (
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
		<line x1="18" x2="6" y1="6" y2="18" />
		<line x1="6" x2="18" y1="6" y2="18" />
	</svg>
);
