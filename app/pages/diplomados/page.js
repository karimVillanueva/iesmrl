'use client';
import React, { useState, useRef,useEffect } from 'react';
import Link from 'next/link';
import logo from '../../../public/logo_oscuro_no_bg.svg'
import Image from 'next/image'

// Datos de ejemplo
const courses = [
  {
    id: 1,
    title: "Curso de JavaScript",
    image: "https://via.placeholder.com/300",
    description: "Aprende los fundamentos de JavaScript, el lenguaje de la web.",
    syllabus: "1. Introducción a JavaScript\n2. Sintaxis y Operadores\n3. Funciones y Objetos\n4. DOM y Eventos\n5. ES6 y Más Allá"
  },
  {
    id: 2,
    title: "Curso de React",
    image: "https://via.placeholder.com/300",
    description: "Construye interfaces de usuario con React.",
    syllabus: "1. Introducción a React\n2. Componentes y Props\n3. Estado y Ciclo de Vida\n4. Hooks\n5. Gestión del Estado con Redux"
  },
  {
    id: 3,
    title: "Curso de React",
    image: "https://via.placeholder.com/300",
    description: "Construye interfaces de usuario con React.",
    syllabus: "1. Introducción a React\n2. Componentes y Props\n3. Estado y Ciclo de Vida\n4. Hooks\n5. Gestión del Estado con Redux"
  },
  {
    id: 4,
    title: "Curso de React",
    image: "https://via.placeholder.com/300",
    description: "Construye interfaces de usuario con React.",
    syllabus: "1. Introducción a React\n2. Componentes y Props\n3. Estado y Ciclo de Vida\n4. Hooks\n5. Gestión del Estado con Redux"
  },
  {
    id: 5,
    title: "Curso de React",
    image: "https://via.placeholder.com/300",
    description: "Construye interfaces de usuario con React.",
    syllabus: "1. Introducción a React\n2. Componentes y Props\n3. Estado y Ciclo de Vida\n4. Hooks\n5. Gestión del Estado con Redux"
  },
  {
    id: 6,
    title: "Curso de React",
    image: "https://via.placeholder.com/300",
    description: "Construye interfaces de usuario con React.",
    syllabus: "1. Introducción a React\n2. Componentes y Props\n3. Estado y Ciclo de Vida\n4. Hooks\n5. Gestión del Estado con Redux"
  },
  // Agrega más cursos aquí
];


export default function() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);    
  }

  const [selectedCourse, setSelectedCourse] = useState(null);
  const carouselRef = useRef(null);

  const openPopup = (course) => {
    setSelectedCourse(course);
  };

  const closePopup = () => {
    setSelectedCourse(null);
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Ajusta el valor según el tamaño de tu tarjeta
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Ajusta el valor según el tamaño de tu tarjeta
        behavior: 'smooth',
      });
    }
  };

   // Estado para el texto del párrafo
   const [text, setText] = useState('Este es el primer texto.');
   const [isPaused, setIsPaused] = useState(false);
   const [speed, setSpeed] = useState(3000); // Velocidad inicial de 3 segundos
   const intervalRef = useRef(null);
 
   // Lista de textos que se mostrarán en el párrafo
   const texts = [
     'Este es el primer texto.',
     'Este es el segundo texto.',
     'Este es el tercer texto.',
     'Este es el cuarto texto.',
     'Este es el quinto texto.',
   ];
 
   useEffect(() => {
     // Índice para cambiar los textos en secuencia
     let index = 0;
 
     // Función para iniciar el intervalo
     const startInterval = () => {
       intervalRef.current = setInterval(() => {
         index = (index + 1) % texts.length; // Ciclar a través de los textos
         setText(texts[index]);
       }, speed);
     };
 
     // Inicia el intervalo solo si no está en pausa
     if (!isPaused) {
       startInterval();
     }
 
     // Limpiar el intervalo cuando el componente se desmonta o cuando cambia la pausa o la velocidad
     return () => clearInterval(intervalRef.current);
   }, [isPaused, speed]); 

  return (
  <div >
    <header className="bg-[#bca61c] p-4 ">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-white text-xl font-bold ">
              <Link href="/">
                <Image src={logo} alt="Logo" className="h-8" /> {/* Ajusta la altura según sea necesario */}
              </Link>
            </div>

            {/* Nav Links */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-white hover:text-blue-300">Nosotros</Link>
              <Link href="/services" className="text-white hover:text-blue-300">Diplomados</Link>
              <Link href="/contact" className="text-white hover:text-blue-300">Contacto</Link>
            </nav>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}>
            <Link href="/" className="block text-white hover:text-blue-300 mb-2">Inicio</Link>
            <Link href="/services" className="block text-white hover:text-blue-300 mb-2">Servicios</Link>
            <Link href="/contact" className="block text-white hover:text-blue-300">Contacto</Link>
          </div>
    </header>

    <div className="relative">
      {/* Botón de desplazamiento a la izquierda */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md z-10"
        onClick={scrollLeft}
      >
        &#8249;
      </button>

      {/* Carrusel de cursos */}
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll space-x-4 p-4 no-scrollbar"
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="min-w-[300px] bg-white shadow-md rounded-md cursor-pointer transform hover:scale-105 transition-transform duration-200"
            onClick={() => openPopup(course)}
          >
            <Image
              src={logo}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-md"
              height={300}
              width={300}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-700">{course.title}</h3>
              <p className="text-sm text-gray-700">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón de desplazamiento a la derecha */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md z-10"
        onClick={scrollRight}
      >
        &#8250;
      </button>

      {/* Popup del temario */}
      {selectedCourse && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closePopup}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-700">{selectedCourse.title}</h2>
            <h3 className="text-lg font-semibold text-gray-700">Temario:</h3>
            <pre className="whitespace-pre-wrap text-sm text-gray-700">{selectedCourse.syllabus}</pre>
          </div>
        </div>
      )}      
    </div>

    {/* Texto cambiante */} 
    <div className="flex flex-col items-center justify-center  bg-black-100 space-y-4">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-md">
        <p className="text-white text-lg font-medium">{text}</p>
      </div>
    </div>

  </div>
  );
};

