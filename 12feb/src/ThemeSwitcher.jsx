// ThemeSwitcher.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
  const { changeTheme } = useTheme();

  const handleThemeChange = () => {
    // Change the theme as needed
    changeTheme({
      color: 'blue',
      font: 'Times New Roman, serif',
    });
  };

  return (
    <button onClick={handleThemeChange}>
      Change Theme to Blue and Times New Roman
    </button>
  );
};

export default ThemeSwitcher;
