'use client';

import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import courses from '../data/courses.json'; 
import CardComponent from './CardComponent';
import CoursePopup from './CoursePopup';
import Link from 'next/link';

const CustomCarousel = () => {
  const { isDarkTheme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Estilo condicional basado en el tema
  const bgClass = isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black';

  // Configuración del carrusel
  const settings = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlay: !isPopupVisible, // Cambia a false si el popup está visible
    autoPlaySpeed: 2500,
    centerMode: false,
    className: "",
    containerClass: "container mx-auto", // Añadimos responsive centrado
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "px-2", // Espaciado entre items
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: false,
    renderDotsOutside: false,
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
      },
      desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 1,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    },
    showDots: true,
    sliderClass: "",
    slidesToSlide: 1,
    swipeable: true,
    beforeChange: (nextSlide) => setSelectedIndex(nextSlide),
  };

  // Función para manejar la selección de una tarjeta
  const handleSelectCard = (index) => {
    setSelectedIndex(index);
    setIsPopupVisible(true);
  };

  // Función para cerrar el popup y reanudar el carrusel
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div id="carrousel" className={`h-screen p-4 ${bgClass}`}>
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-2xl font-bold">Cursos Disponibles</h1>
      </div>

      <Carousel {...settings}>
        {courses.map((course, index) => (
          <div key={course.id} className="flex justify-center items-center">
            <div
              className={`w-full h-full cursor-pointer`}
              onClick={() => handleSelectCard(index)}
            >
              {/* Usamos el componente CardComponent para cada curso */}
              <CardComponent course={course} />
            </div>

            {selectedIndex === index && isPopupVisible && (
              <CoursePopup
                course={course.courseData}
                isVisible={isPopupVisible}
                onClose={handleClosePopup}
              />
            )}
          </div>
        ))}
      </Carousel>


      <div className={`flex justify-between items-center p-4 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {/* Botón de post anterior */}
      <Link href="#header" className={`flex flex-col items-start transition-colors duration-300 ${isDarkTheme ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
        <span className="text-sm uppercase text-gray-500">Anterior</span>
        <span className="font-bold">Inicio</span>
      </Link>

      {/* Botón de siguiente post */}
      <Link href="#teachers" className={`flex flex-col items-end transition-colors duration-300 ${isDarkTheme ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
        <span className="text-sm uppercase text-gray-500">Siguiente</span>
        <span className="font-bold">Nuestros docentes</span>
      </Link>
    </div>



    </div>
  );
};

export default CustomCarousel;
