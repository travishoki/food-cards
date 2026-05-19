import { QRCodeSVG } from "qrcode.react";

import "./RecipeQR.scss";

type RecipeQRProps = {
	url: string;
};

export const RecipeQR = ({ url }: RecipeQRProps) => (
	<a
		className="recipe-qr"
		href={url}
		rel="noopener noreferrer"
		target="_blank"
	>
		<QRCodeSVG
			bgColor="#ffffff"
			fgColor="#000000"
			marginSize={1}
			size={256}
			value={url}
		/>
		<span className="recipe-qr__label">Scan for recipe</span>
	</a>
);
