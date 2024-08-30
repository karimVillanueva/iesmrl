'use client';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6'; // Importa el icono de WhatsApp
import { useTheme } from '../context/ThemeContext'; // Importa el hook personalizado del contexto

function Whatsapp() {
  const { isDarkTheme } = useTheme(); // Usa el contexto de tema para obtener el estado del tema

  return (
    <a
      href="https://wa.me/+525562109769" // Reemplaza con tu número
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 transition-transform duration-300 transform hover:scale-110"
    >
      {/* Cambia el color del icono dependiendo del tema */}
      <FaWhatsapp
        color={isDarkTheme ? 'white' : 'black'}
        className='w-7 h-7 md:w-10 md:h-10'
      />
    </a>
  );
}

export default Whatsapp;
