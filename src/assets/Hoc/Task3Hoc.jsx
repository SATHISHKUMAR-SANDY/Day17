import React from 'react'

function Task3Hoc(WrappedComponent) {
    return (props) => {
        if (!props.isVisible) {
          return <h3>Component is hidden!</h3>;
        }
    
        return <WrappedComponent {...props} />;
      };
}

export default Task3Hoc