'use client'
import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Importa el hook personalizado del contexto de tema

const Background = ({ children }) => {
  const { isDarkTheme } = useTheme(); // Usa el contexto de tema para obtener el estado del tema actual

  return (
    <div
      className={`min-h-screen transition-colors duration-300 p-4 ${
        isDarkTheme ? 'bg-gray-800 text-white' : 'bg[#eeebd4] text-gray-900 p-4'
      }`}
    >
      {children} {/* Renderiza los hijos pasados al componente Background */}
    </div>
  );
};

export default Background;
    