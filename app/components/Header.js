'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from './logo_oscuro_no_bg.svg';
import { useTheme } from '../context/ThemeContext'; 
import { IoMoonOutline } from "react-icons/io5";



const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme(); // Usa el contexto de tema para obtener el estado del tema y la función para alternarlo

  const [isMobileView, setIsMobileView] = useState(false); // Estado para manejar si es vista móvil o no

  // Efecto para detectar el tamaño de la pantalla y actualizar el estado de isMobileView
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Considera vista móvil si el ancho es menor a 768px
    };

    handleResize(); // Llama a la función una vez para configurar el estado inicial

    window.addEventListener('resize', handleResize); // Añade el event listener
    return () => window.removeEventListener('resize', handleResize); // Limpia el event listener al desmontar el componente
  }, []);
  
  // Texto del título en función del tamaño de la pantalla
  const titleText = isMobileView ? 'IESMERL' : 'Instituto de Estudios Superiores en Medicina Regenerativa y Longevidad'; // Usa texto largo o iniciales dependiendo del tamaño de la pantalla

  return (
    <header className={`flex items-center justify-between p-4 transition-colors duration-300 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Logo en formato SVG */}
      <div className="flex items-center">
      <Image
         src={logo}
         width={500}
         height={500}
         alt="Picture of the logo"
        /> 
      </div>
       
      {/* Título Responsivo 
      <h1 className="text-2xl font-semibold">
        {titleText}
      </h1>
      */}

      {/* Icono para cambiar de tema */}
      <div
        className="cursor-pointer p-2 rounded transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={toggleTheme}
      >
        <IoMoonOutline size={24} />
      </div>
    </header>
  );
};

export default Header;
