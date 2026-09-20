import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  /** Optional stable test id so failures are visible in E2E. */
  dataTestId?: string;
}

interface State {
  hasError: boolean;
}

/**
 * Guards a section so a runtime error during a scroll-triggered mount or
 * animation is contained locally instead of unmounting (blanking) the whole
 * app — which is what a user experiences as the page "refreshing/resetting"
 * while scrolling. Falling back per-section keeps the rest of the page usable.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // Surface the failure in the console (regression visibility) without
    // letting it escalate into an uncaught error that blanks the page.
    console.error('Section failed to render:', error.message, info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <section
          data-testid={this.props.dataTestId ? `${this.props.dataTestId}-error` : undefined}
          className="py-12 px-4 text-center text-slate-400"
        >
          <p className="text-sm">
            This section hit a rendering issue and was skipped. The rest of the page
            is unaffected.
          </p>
        </section>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
