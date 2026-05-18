import {
	COOK_TIME_CLOCK_SIZE,
	COOK_TIME_FONT_SIZE_INSTRUCTIONS,
	COOK_TIME_FONT_SIZE_TIME,
	COOK_TIME_HEIGHT,
} from "../Card.const";
import "./CookTime.scss";

type CookTimeProps = {
	cardRatio: number;
	instructions: string;
	time: string;
};

export const CookTime = ({ cardRatio, instructions, time }: CookTimeProps) => {
	const height = COOK_TIME_HEIGHT * cardRatio;
	const clockSize = COOK_TIME_CLOCK_SIZE * cardRatio;
	const fontSizeTime = COOK_TIME_FONT_SIZE_TIME * cardRatio;
	const fontSizeInstructions = COOK_TIME_FONT_SIZE_INSTRUCTIONS * cardRatio;

	return (
		<div className="cook-time" style={{ height: `${height}px` }}>
			<img
				alt=""
				height={clockSize}
				src="/stamps/clock.png"
				width={clockSize}
			/>
			<span
				className="cook-time__instructions"
				style={{ fontSize: `${fontSizeInstructions}px` }}
			>
				{instructions}
			</span>
			<span
				className="cook-time__time"
				style={{ fontSize: `${fontSizeTime}px` }}
			>
				{time}
			</span>
		</div>
	);
};
