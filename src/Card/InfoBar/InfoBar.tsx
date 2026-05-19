import "./InfoBar.scss";

type InfoBarProps = {
	text: string;
};

export const InfoBar = ({ text }: InfoBarProps) => (
	<div className="info-bar">
		<div className="info-bar-inner">
			<p>{text}</p>
			<img
				alt="Info Bar"
				loading="lazy"
				src="/card-accents/info-bar.png"
			/>
		</div>
	</div>
);
