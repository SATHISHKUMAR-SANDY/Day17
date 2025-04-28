// MouseDisplay.jsx
import React from 'react';

function MouseDisplay({ mousePosition }) {
  return (
    <div style={{ padding: '20px', border: '1px solid black' }}>
      <h2>Mouse Coordinates</h2>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </div>
  );
}

export default MouseDisplay;
