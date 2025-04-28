// TaskWithData.jsx
import React from 'react';

function Task9({ data }) {
  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Task9;
