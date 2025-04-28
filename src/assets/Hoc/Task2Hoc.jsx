import React from 'react'

function Task2Hoc(WrappedComponent) {
    return (props) => {
        const customStyle = {
          border: "2px solid #4CAF50",
          padding: "20px",
          margin: "20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        };
    
        return (
          <div style={customStyle}>
            <WrappedComponent {...props} />
          </div>
        );
      };
    };


export default Task2Hoc