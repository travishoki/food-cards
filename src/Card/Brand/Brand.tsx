import { useState } from "react";

import "./Brand.scss";

type BrandProps = {
	brand: string;
};

export const Brand = ({ brand }: BrandProps) => {
	const [errored, setErrored] = useState(false);

	if (errored) return null;

	return (
		<img
			alt=""
			className="brand-img"
			loading="lazy"
			onError={() => setErrored(true)}
			src={`/brands/${brand}.png`}
		/>
	);
};
