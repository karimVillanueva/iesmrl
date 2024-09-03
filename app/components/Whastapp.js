'use client';
import React from 'react';
import { FaWhatsapp, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa'; // Importa los iconos
import { useTheme } from '../context/ThemeContext'; // Importa el hook personalizado del contexto

function SocialLinks() {
  const { isDarkTheme } = useTheme(); // Usa el contexto de tema para obtener el estado del tema

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-4 md:space-y-6 transition-transform duration-300">
      {/* Enlace a WhatsApp */}
      <a
        href="https://wa.me/+525562109769" // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 transform hover:scale-110"
      >
        <FaWhatsapp
          size={28}
          className={`w-7 h-7 md:w-10 md:h-10 ${isDarkTheme ? 'text-green-500' : 'text-green-500'}`} // Estilo basado en el tema
        />
      </a>
      
      {/* Enlace a YouTube */}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 transform hover:scale-110"
      >
        <FaYoutube
          size={28}
          className={`w-7 h-7 md:w-10 md:h-10 ${isDarkTheme ? 'text-red-600' : 'text-red-600'}`} // Estilo basado en el tema
        />
      </a>

      {/* Enlace a Instagram */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 transform hover:scale-110"
      >
        <FaInstagram
          size={28}
          className={`w-7 h-7 md:w-10 md:h-10 ${isDarkTheme ? 'text-pink-500' : 'text-pink-500'}`} // Estilo basado en el tema
        />
      </a>

      {/* Enlace a Facebook */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 transform hover:scale-110"
      >
        <FaFacebook
          size={28}
          className={`w-7 h-7 md:w-10 md:h-10 ${isDarkTheme ? 'text-blue-600' : 'text-blue-600'}`} // Estilo basado en el tema
        />
      </a>
    </div>
  );
}

export default SocialLinks;
