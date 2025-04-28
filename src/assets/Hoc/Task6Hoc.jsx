import React from 'react'
import { useEffect } from 'react';


function Task6Hoc(WrappedComponent) {
    return (props) => {
        useEffect(() => {
          // Log message when component is mounted
          console.log(`${WrappedComponent.name} component mounted`);
    
          // Log message when component is unmounted
          return () => {
            console.log(`${WrappedComponent.name} component unmounted`);
          };
        }, []); // Empty dependency array means this effect runs on mount and unmount
    
        // Return the wrapped component with all received props
        return <WrappedComponent {...props} />;
      };
}

export default Task6Hoc