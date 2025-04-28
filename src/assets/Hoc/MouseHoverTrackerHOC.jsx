// MouseHoverTrackerHOC.jsx
import React, { useState, useEffect } from 'react';

function MouseHoverTrackerHOC(WrappedComponent) {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      // Mouse move event listener
      const handleMouseMove = (event) => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      };

      // Add event listener to track mouse movement
      document.addEventListener('mousemove', handleMouseMove);

      // Cleanup the event listener when the component is unmounted
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);  // Empty dependency array ensures this runs only once (on mount and unmount)

    // Pass mouse position as a prop to the wrapped component
    return <WrappedComponent mousePosition={mousePosition} {...props} />;
  };
}

export default MouseHoverTrackerHOC;
