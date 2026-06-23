import "./Graphic.scss";

type GraphicProps = {
	fullWidth?: boolean;
	name: string;
	src: string;
};

export const Graphic = ({ fullWidth, name, src }: GraphicProps) => (
	<img
		alt={name}
		className={`graphicImg ${fullWidth ? "graphicImg--full" : ""}`}
		loading="lazy"
		onError={(e) => {
			e.currentTarget.src = "/images/missing/missing.jpg";
		}}
		src={src}
	/>
);
