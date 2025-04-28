import React from 'react'
import Task2Hoc from '../Hoc/Task2Hoc';

function Task2() {
    return (
        <div>
          <h2>Hello from SimpleComponent!</h2>
          <p>This component will have extra styles!</p>
        </div>
      );
    };

export default Task2Hoc(Task2)