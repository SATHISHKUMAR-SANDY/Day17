// ErrorBoundaryHOC.jsx
import React, { Component } from 'react';

function ErrorBoundaryHOC(WrappedComponent) {
  return class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, errorMessage: '' };
    }

    // This method is called when an error is caught
    static getDerivedStateFromError(error) {
      // Update the state to indicate an error has occurred
      return { hasError: true, errorMessage: error.message };
    }

    // This method logs the error (optional)
    componentDidCatch(error, info) {
      console.error('Error caught in Error Boundary:', error, info);
    }

    render() {
      if (this.state.hasError) {
        // Show a fallback UI if an error occurs
        return <h3>Something went wrong: {this.state.errorMessage}</h3>;
      }

      // If no error, render the wrapped component
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default ErrorBoundaryHOC;
