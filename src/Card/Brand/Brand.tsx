import "./Brand.scss";

type BrandProps = {
	brand: string;
};

export const Brand = ({ brand }: BrandProps) => (
	<img
		alt=""
		className="brand-img"
		loading="lazy"
		src={`/brands/${brand}.png`}
	/>
);
