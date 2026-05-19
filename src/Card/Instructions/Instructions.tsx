import "./Instructions.scss";

type InstructionsProps = {
	text: string | string[];
};

export const Instructions = ({ text }: InstructionsProps) => (
	<div className="instructions">
		{Array.isArray(text) ? (
			<ol>
				{text.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ol>
		) : (
			<p>{text}</p>
		)}
	</div>
);
