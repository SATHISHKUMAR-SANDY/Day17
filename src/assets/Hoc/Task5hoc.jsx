import React from 'react'

function Task5hoc(WrappedComponent) {
    return (props) => {
        if (props.isLoading) {
          return <h3>Loading... 🔄</h3>;
        }
    
        return <WrappedComponent {...props} />;
      };
}

export default Task5hoc