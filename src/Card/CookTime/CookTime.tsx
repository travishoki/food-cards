import "./CookTime.scss";

type CookTimeProps = {
	instructions: string;
	time: string;
};

export const CookTime = ({ instructions, time }: CookTimeProps) => (
	<div className="cook-time">
		<img
			alt=""
			className="cook-time__clock"
			loading="lazy"
			src="/images/stamps/clock.png"
		/>
		<span className="cook-time__instructions">{instructions}</span>
		<span className="cook-time__time">{time}</span>
	</div>
);
