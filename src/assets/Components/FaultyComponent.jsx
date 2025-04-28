// FaultyComponent.jsx
import React from 'react';

function FaultyComponent() {
  // This will throw an error intentionally
  throw new Error('This is a deliberately thrown error!');
  return <div>This will never be rendered.</div>;
}

export default FaultyComponent;
