import React, { useEffect } from 'react';

function TitleUpdateHOC(WrappedComponent) {
  return (props) => {
    useEffect(() => {
      // Update the document title with the name of the component
      document.title = WrappedComponent.name;
    }, []);  // Empty dependency array means it will run once when the component mounts

    return <WrappedComponent {...props} />;
  };
}

export default TitleUpdateHOC;
