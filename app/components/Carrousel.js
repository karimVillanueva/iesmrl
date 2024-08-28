import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import courses from '../data/courses.json'; 
import CardComponent from './CardComponent';
import CoursePopup from './CoursePopup.js';

const Carousel = () => {
  const { isDarkTheme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isStatic, setIsStatic] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);

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

  // Manejar el arrastre
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    isDragging.current = true;
    setIsStatic(true); // Detener el movimiento cuando se está arrastrando
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      const deltaX = e.clientX - startX;
      setCurrentX(deltaX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      const threshold = 100; // Umbral para el arrastre
      if (currentX < -threshold) {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % courses.length);
      } else if (currentX > threshold) {
        setSelectedIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
      }
      setCurrentX(0);
      isDragging.current = false;
      setIsStatic(false); // Reanudar el movimiento
    }
  };

  // Seleccionar una tarjeta y detener el movimiento
  const handleSelectCard = (index) => {
    setSelectedIndex(index);
    setIsStatic(true); // Detener el movimiento cuando se selecciona una tarjeta
  };

  // Volver a activar el movimiento del carrusel
  const handleResumeCarousel = () => {
    setIsStatic(false);
  };

  // Manejador de estado del popup
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div
      id="carrousel"
      className={`h-screen p-4 ${bgClass}`}
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="flex justify-center items-center mb-0">
        <h1 className="text-2xl font-bold">Cursos Disponibles</h1>
      </div>

      <div className=" flex overflow-hidden h-full">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className={`flex  w-full h-1/2  rounded-lg shadow-lg transition-transform duration-700 ${
              selectedIndex === index ? 'transform scale-100' : 'transform scale-75'
            } ${selectedIndex === index ? 'z-10' : 'z-0'} cursor-pointer`}
            style={{
              transform: `translateX(${(index - selectedIndex) * 159}px)`,
              opacity: selectedIndex === index ? 1 : 0.5,
              transition: 'transform 0.5s, opacity 0.5s',
            }}
            onClick={() => {
              handleSelectCard(index);
              setIsPopupVisible(true);
            }}
          >
            <CardComponent course={course}  />
            <CoursePopup
              course={course.courseData}
              isVisible={isPopupVisible}
              onClose={() => {
                setIsPopupVisible(false);
                setIsStatic(false);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
