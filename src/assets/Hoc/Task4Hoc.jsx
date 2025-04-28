// Task4Hoc.jsx
import React from 'react';

// This is the Higher Order Component (HOC)
function Task4Hoc(WrappedComponent) {
  return (props) => {
    // Check if the user is authenticated through the prop
    if (!props.isAuthenticated) {
      return <h3>Please log in to access this page.</h3>;
    }
    
    // If authenticated, return the wrapped component
    return <WrappedComponent {...props} />;
  };
}

export default Task4Hoc;
