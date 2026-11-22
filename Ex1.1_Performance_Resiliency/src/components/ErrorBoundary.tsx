
import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      "Failed to render the person detail route:",
      error,
      info
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="detail-card detail-empty" role="alert">
          <h1>Không tải được trang chi tiết</h1>
          <p>
            Đã xảy ra lỗi khi tải component.
            Hãy thử tải lại trang.
          </p>

          <button
            className="btn"
            type="button"
            onClick={() => window.location.reload()}
          >
            Tải lại
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}
