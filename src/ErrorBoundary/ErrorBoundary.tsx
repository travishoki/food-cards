import { Component, ErrorInfo, ReactNode } from "react";

type ErrorBoundaryProps = {
	children: ReactNode;
	fallback?: ReactNode;
};

type ErrorBoundaryState = {
	error: Error | null;
	hasError: boolean;
};

export class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { error: null, hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { error, hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo): void {
		console.error("ErrorBoundary caught an error:", error, info);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			if (this.props.fallback) return this.props.fallback;

			return (
				<div className="error-boundary">
					<p>Something went wrong loading the food list.</p>
					{this.state.error && (
						<pre className="error-boundary__message">
							{this.state.error.message}
						</pre>
					)}
				</div>
			);
		}

		return this.props.children;
	}
}
