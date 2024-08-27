import React, { createContext, useState, useContext } from 'react';

// Crear el contexto de tema
const ThemeContext = createContext();

// Proveedor de contexto de tema
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Función para alternar el tema
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el contexto de tema
export const useTheme = () => useContext(ThemeContext);
