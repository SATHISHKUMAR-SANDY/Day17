// AuthenticationHOC.jsx
import React from 'react';

function AuthenticationHOC(WrappedComponent) {
  return (props) => {
    const { isAuthenticated } = props;  // Check the authentication status

    if (!isAuthenticated) {
      return <h3>Please log in to access this page.</h3>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default AuthenticationHOC;
