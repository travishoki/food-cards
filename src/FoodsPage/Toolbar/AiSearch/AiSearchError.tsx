type AiSearchErrorProps = {
	error: string | null;
};

export const AiSearchError = ({ error }: AiSearchErrorProps) => {
	if (!error) return null;

	return <p className="ai-search__error">{error}</p>;
};
