import { ReactNode } from "react";

import "./FilterSection.scss";

type FilterSectionProps = {
	ariaLabel?: string;
	children: ReactNode;
	label: string;
	labelFor?: string;
};

export const FilterSection = ({
	ariaLabel,
	children,
	label,
	labelFor,
}: FilterSectionProps) => (
	<section aria-label={ariaLabel ?? label} className="filter-section">
		{labelFor ? (
			<label className="filter-section__label" htmlFor={labelFor}>
				{label}
			</label>
		) : (
			<span className="filter-section__label">{label}</span>
		)}
		<div className="filter-section__row">{children}</div>
	</section>
);
