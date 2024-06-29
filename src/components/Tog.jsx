import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const App = () => {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={60}
    />
  );
};
export default App