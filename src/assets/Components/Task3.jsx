import React from 'react'
import { useState } from 'react';
import Task3Hoc from '../Hoc/Task3Hoc';

function Task3() {
  const[isVisible,setisvisibel] = useState(false)
    return (
        <div>
          <h2>Hello, I am visible!</h2>
          <p>This component is conditionally rendered.</p>
        </div>
      );
}

export default Task3Hoc(Task3)