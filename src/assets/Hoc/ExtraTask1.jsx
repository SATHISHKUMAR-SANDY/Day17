import React from 'react'

function ExtraTask1(WrappedComponent) {
    return (props) => {
        // Add extra props
        const newProps = {
          message: "This is a prop from HOC!",
          username: "ChatGPT User",
        };
    
        return <WrappedComponent {...props} {...newProps} />;
      };
}

export default ExtraTask1