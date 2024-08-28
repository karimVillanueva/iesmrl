import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import courses from '../data/courses.json'; 
import CardComponent from './CardComponent';


const Carousel = () => {
  const { isDarkTheme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isStatic, setIsStatic] = useState(false);

  // Estilo condicional basado en el tema
  const bgClass = isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black';
 
  // Manejar el cambio de curso automáticamente si no está en modo estático
  useEffect(() => {
    if (!isStatic) {
      const interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % courses.length);
      }, 3000); // Cambiar cada 3 segundos

      return () => clearInterval(interval);
    }
  }, [isStatic]);
  

  // Seleccionar una tarjeta y detener el movimiento
  const handleSelectCard = (index) => {
    setSelectedIndex(index);
    setIsStatic(true); // Detener el movimiento cuando se selecciona una tarjeta
  };

  // Volver a activar el movimiento del carrusel
  const handleResumeCarousel = () => {
    setIsStatic(false);        
  };


  return (
    <div id="carrousel" className={`h-full p-8 ${bgClass}`}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Cursos Disponibles</h1>
      </div>
      
      <div className="relative  justify-center items-center overflow-hidden h-screen">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`absolute w-60 h-64  rounded-lg shadow-lg transition-transform duration-700 `}
            style={{
              transform: `translateX(${(index - selectedIndex) * 300}px)`,
              opacity: selectedIndex === index ? 1 : 0.5,
              transition: 'transform 0.5s, opacity 0.5s'
            }}
            onClick={() => handleSelectCard(index)}
          >
            <CardComponent course={course} />
          </div>
        ))}
      </div>
      
      {isStatic && (
        <button onClick={handleResumeCarousel} className="mt-4 py-2 px-4 rounded bg-green-500 text-white">
          Reanudar Carrusel
        </button>
      )}
    </div>
  );
};

export default Carousel;
