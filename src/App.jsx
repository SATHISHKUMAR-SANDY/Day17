// App.jsx
import React, { useState } from 'react';
import Hello from './assets/Components/Hello';
import Task1 from './assets/Components/Task1';
import Task2 from './assets/Components/Task2';
import Task3 from './assets/Components/Task3';
import Task4Page from './assets/pages/Task4Page';
import Task5 from './assets/Components/Task5';
import Task6 from './assets/Components/Task6';
import Task9 from './assets/Components/Task9';
import MouseDisplay from './assets/Components/MouseDisplay';
import HomePage from './assets/Components/HomePage';

// Import HOCs
import Task9Hoc from './assets/Hoc/Task9Hoc';
import MouseHoverTrackerHOC from './assets/Hoc/MouseHoverTrackerHOC';
import TitleUpdateHOC from './assets/Hoc/TitleUpdateHOC';
import ThemeHOC from './assets/Hoc/ThemeHOC';

// Import components for theming
import WelcomePage from './assets/Components/WelcomePage';
import ProfilePage from './assets/Components/ProfilePage';

const TaskWithFetchedData = Task9Hoc(Task9, 'https://jsonplaceholder.typicode.com/posts');
const MouseDisplayWithTracking = MouseHoverTrackerHOC(MouseDisplay);
const HomePageWithTitleUpdate = TitleUpdateHOC(HomePage);

const ThemedWelcomePage = ThemeHOC(WelcomePage);
const ThemedProfilePage = ThemeHOC(ProfilePage);

const App = () => {
  const [theme, setTheme] = useState('light');  // Default theme is 'light'

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <h1>Success</h1>
      <HomePageWithTitleUpdate />
      <Hello />
      <Task1 />
      <Task2 />
      <Task3 />
      <Task4Page />
      <Task5 />
      <Task6 />
      <TaskWithFetchedData />
      <MouseDisplayWithTracking />
      
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <ThemedWelcomePage theme={theme} />
      <ThemedProfilePage theme={theme} />
    </>
  );
};

export default App;
