'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto de tema
const ThemeContext = createContext();

// Proveedor de contexto de tema
export const ThemeProvider = ({ children }) => {
  // Estado para el tema inicial y el tema actual
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Determina el tema inicial basado en la preferencia del navegador
  useEffect(() => {
    // Verifica si la propiedad window.matchMedia existe y si el usuario prefiere el tema oscuro
    const getInitialTheme = () => {
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return false; // Tema claro por defecto si no se puede determinar
    };

    // Inicializa el estado del tema
    setIsDarkTheme(getInitialTheme());

    // Escuchar cambios en el tema preferido del navegador
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setIsDarkTheme(event.matches);
    };

    // Añadir el listener
    mediaQuery.addEventListener('change', handleChange);

    // Limpiar el listener al desmontar el componente
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Función para alternar el tema manualmente
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el contexto de tema
export const useTheme = () => useContext(ThemeContext);
