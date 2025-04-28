// ThemeHOC.jsx
import React from 'react';

function ThemeHOC(WrappedComponent) {
  return (props) => {
    const { theme } = props;

    const themeStyles = theme === 'dark'
      ? {
          backgroundColor: '#333',
          color: '#fff',
          padding: '20px',
          borderRadius: '5px',
        }
      : {
          backgroundColor: '#fff',
          color: '#000',
          padding: '20px',
          borderRadius: '5px',
        };

    return (
      <div style={themeStyles}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default ThemeHOC;
