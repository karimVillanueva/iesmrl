'use client';
import React from 'react';
import { FaWhatsapp, FaYoutube, FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa'; // Importa los iconos
import { useTheme } from '../context/ThemeContext'; // Importa el hook personalizado del contexto

function SocialLinks() {
  const { isDarkTheme } = useTheme(); // Usa el contexto de tema para obtener el estado del tema

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-4 md:space-y-6 transition-transform duration-300">
      {/* Enlace a WhatsApp */}
      <a
        href="https://wa.me/+525562109769?text=Hola,%20deseo%20más%20información%20sobre%20el%20próximo%20diplomado"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 transform hover:scale-110"
      >
        <FaWhatsapp
          size={28}
          className={`w-7 h-7 md:w-10 md:h-10 ${isDarkTheme ? 'text-green-500' : 'text-green-500'}`}
        />
      </a>

      {/* Enlace a Instagram */}
      <a
        href="https://www.instagram.com/iesmerl?igsh=MWFtZDY4bnZyM2c1dw=="
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 transform hover:scale-110"
      >
        <FaInstagram
          size={28}
          className={`w-7 h-7 md:w-10 md:h-10 ${isDarkTheme ? 'text-pink-500' : 'text-pink-500'}`}
        />
      </a>

      {/* Enlace a Facebook */}
      <a
        href="https://www.facebook.com/share/KhtiNPg58XpRa3C9/?mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 transform hover:scale-110"
      >
        <FaFacebook
          size={28}
          className={`w-7 h-7 md:w-10 md:h-10 ${isDarkTheme ? 'text-blue-600' : 'text-blue-600'}`}
        />
      </a>

      {/* Enlace a YouTube */}
      <a
        href="https://www.youtube.com/@dr.odiseo/videos"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 transform hover:scale-110"
      >
        <FaYoutube
          size={28}
          className={`w-7 h-7 md:w-10 md:h-10 ${isDarkTheme ? 'text-red-600' : 'text-red-600'}`}
        />
      </a>

      {/* Enlace a Google Maps */}
      <a
        href="https://maps.app.goo.gl/JErUsp63cAAvZZW78"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 transform hover:scale-110"
      >
        <FaMapMarkerAlt
          size={28}
          className={`w-7 h-7 md:w-10 md:h-10 ${isDarkTheme ? 'text-green-700' : 'text-green-700'}`} // Cambia el color si es necesario
        />
      </a>
    </div>
  );
}

export default SocialLinks;
