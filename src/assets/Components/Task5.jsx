import React from 'react'
import { useState } from 'react';
import Task5hoc from '../Hoc/Task5hoc';

function Task5() {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div>
          <h2>Data Loaded Successfully!</h2>
        </div>
      );
    };

export default Task5hoc(Task5)