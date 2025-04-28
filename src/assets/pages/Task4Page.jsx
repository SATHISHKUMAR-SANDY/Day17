// Task4Page.jsx
import React, { useState } from 'react'; 
import Task4Hoc from '../Hoc/Task4Hoc'; // Import the HOC
import Task4 from '../Components/Task4'; // Import the protected component (Task4)

// Wrap Task4 with Task4Hoc to make it protected
const ProtectedTask4 = Task4Hoc(Task4);

function Task4Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial state is not authenticated

  return (
    <div>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>

      {/* Pass the authentication state to the protected Task4 component */}
      <ProtectedTask4 isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default Task4Page;
