import {
	CARD_INFO_PADDING_BOTTOM,
	INFO_BAR_HEIGHT,
	INFO_BAR_TEXT_LEFT_PADDING,
	INFO_BAR_TEXT_TOP_PADDING,
	INFO_BAR_WIDTH,
} from "../Card.const";
import "./InfoBar.css";

type InfoBarProps = {
	cardRatio: number;
	text: string;
};

export const InfoBar = ({ cardRatio, text }: InfoBarProps) => {
	const width = INFO_BAR_WIDTH * cardRatio;
	const height = INFO_BAR_HEIGHT * cardRatio;
	const textPaddingLeft = INFO_BAR_TEXT_LEFT_PADDING * cardRatio;
	const textPaddingTop = INFO_BAR_TEXT_TOP_PADDING * cardRatio;
	const paddingBottom = CARD_INFO_PADDING_BOTTOM * cardRatio;

	return (
		<div
			className="info-bar"
			style={{ paddingBottom: `${paddingBottom}px` }}
		>
			<div className="info-bar-inner">
				<p
					style={{
						padding: `${textPaddingTop}px ${textPaddingLeft}px`,
					}}
				>
					{text}
				</p>
				<img
					alt="Info Bar"
					height={height}
					src="/card-accents/info-bar.png"
					width={width}
				/>
			</div>
		</div>
	);
};
