// ThemedText.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedText = () => {
  const { theme } = useTheme();

  const textStyle = {
    color: theme.color,
    fontFamily: theme.font,
  };

  return <p style={textStyle}>This text is styled based on the theme.</p>;
};

export default ThemedText;
