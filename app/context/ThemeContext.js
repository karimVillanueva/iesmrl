import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto de tema
const ThemeContext = createContext();

// Proveedor de contexto de tema
export const ThemeProvider = ({ children }) => {
  // Determina el tema inicial basado en la preferencia del navegador
  const getInitialTheme = () => {
    // Verifica si la propiedad window.matchMedia existe y si el usuario prefiere el tema oscuro
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true; // Tema oscuro
    }
    return false; // Tema claro por defecto
  };

  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme);

  // Escuchar cambios en el tema preferido del navegador
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Handler para cambios en el tema del navegador
    const handleChange = (event) => {
      setIsDarkTheme(event.matches);
    };

    // Añadir el listener
    mediaQuery.addEventListener('change', handleChange);

    // Eliminar el listener al desmontar el componente
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Función para alternar el tema manualmente
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
