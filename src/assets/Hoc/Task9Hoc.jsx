// DataFetchingHOC.jsx
import React, { useState, useEffect } from 'react';

function Task9Hoc(WrappedComponent, apiUrl) {
  return (props) => {
    const [data, setData] = useState(null);  // Holds fetched data
    const [loading, setLoading] = useState(true);  // Indicates loading state
    const [error, setError] = useState(null);  // Holds any error messages

    useEffect(() => {
      // Fetch data from the API when the component mounts
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);  // Fetch data from the provided API URL
          const result = await response.json();  // Parse the response as JSON
          setData(result);  // Update state with fetched data
        } catch (err) {
          setError(err.message);  // Set error message if fetch fails
        } finally {
          setLoading(false);  // Set loading to false when the request is complete
        }
      };

      fetchData();  // Call the fetch function
    }, [apiUrl]);  // Re-run when the API URL changes

    // Show loading spinner while fetching data
    if (loading) {
      return <h3>Loading data...</h3>;
    }

    // Show error message if the fetch fails
    if (error) {
      return <h3>Error: {error}</h3>;
    }

    // Pass fetched data as a prop to the wrapped component
    return <WrappedComponent data={data} {...props} />;
  };
}

export default Task9Hoc;
