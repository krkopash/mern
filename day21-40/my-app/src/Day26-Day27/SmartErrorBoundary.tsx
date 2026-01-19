import { Component } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class SmartErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  reloadApp = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-overlay">
          <div className="error-box">
            <h2>🚨 Application Error</h2>
            <p>Something went wrong unexpectedly.</p>
            <button onClick={this.reloadApp}>Reload App</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SmartErrorBoundary;
