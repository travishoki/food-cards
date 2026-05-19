import { QRCodeSVG } from "qrcode.react";

import {
	CARD_INFO_PADDING_BOTTOM,
	RECIPE_QR_LABEL_FONT_SIZE,
	RECIPE_QR_SIZE,
} from "../Card.const";
import { useCardRatio } from "../CardContext";
import "./RecipeQR.scss";

type RecipeQRProps = {
	url: string;
};

export const RecipeQR = ({ url }: RecipeQRProps) => {
	const cardRatio = useCardRatio();
	const size = RECIPE_QR_SIZE * cardRatio;
	const labelFontSize = RECIPE_QR_LABEL_FONT_SIZE * cardRatio;
	const paddingBottom = CARD_INFO_PADDING_BOTTOM * cardRatio;

	return (
		<a
			className="recipe-qr"
			href={url}
			rel="noopener noreferrer"
			style={{ paddingBottom: `${paddingBottom}px` }}
			target="_blank"
		>
			<QRCodeSVG
				bgColor="#ffffff"
				fgColor="#000000"
				marginSize={1}
				size={size}
				value={url}
			/>
			<span
				className="recipe-qr__label"
				style={{ fontSize: `${labelFontSize}px` }}
			>
				Scan for recipe
			</span>
		</a>
	);
};
