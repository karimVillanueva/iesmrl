'use client';
import React, { useState, useRef,useEffect } from 'react';
import Link from 'next/link';
import logo from '../../../public/logo_oscuro_no_bg.svg'
import Image from 'next/image'

// Datos de ejemplo
const courses = [
  {
    id: 1,
    title: "Diplomado en MEDICINA REGENERATIVA, ESTÉTICA REGENERATIVA Y LONGEVIDAD.",
    image: "https://via.placeholder.com/300",
    description: "Este diplomado está dirigido a profesionales de la salud que estén interesados a obtener conocimientos prácticos en el ámbito de la medicina regenerativa, estética regenerativa, longevidad, nutrición y psicología en el contexto de la obesidad.",
    syllabus: "1. Introducción a la MEDICINA REGENERATIVA, MEDICINA ESTETICA- REGENERATIVA YLONGEVIDAD SALUDABLE\n2. ESTÉTICA : TOXINA BOTULINICA TIPO A Y PEELING \n3. MEDICINA REGENERATIVA: Bioquímica funcional con micronutrientes , vitaminas, minerales y aminoácidos,funcional y regenerativa, SUEROTERAPIA FUNCIONAL Y REGENERATIVA\n4. LONGEVIDAD SALUDABLE: NUTRICION BÁSICA y clínica aplicada en el contexto de la longevidad saludable\n5.Medicina integrativa como apoyo a la estética y medicina regenerativa\n 6. MEDICINA REGENERATIVA Y ESTÉTICA REGENERATIVA: PLASMA RICO EN PLAQUETAS\n 7.Longevidad saludable, SALUD MENTAL \n 8. MEDICINA REGENERATIVA y ESTÉTICA REGENERATIVA: OZONOTERAPIA \n 9. Medicina REGENERATIVA: TERAPIA NEURAL \n 10. ESTÉTICA REGENERATIVA\n 11. MEDICINA REGENERATIVA Y ESTETICA REGENERATIVA"
  },
  {
    id: 2,
    title: "Diplomado en manejo integral de las adicciones",
    image: "https://via.placeholder.com/300",
    description: "Este diplomado está dirigido a profesionales de la salud que estén interesados a obtener conocimientos prácticos en el ámbito de la medicina regenerativa, estética regenerativa, longevidad, nutrición y psicología en el contexto de la obesidad.",
    syllabus: "1. Introducción a las adicciones\n2. MODELOS TEORICOS EN PSICOTERAPIA , TCC, T SISTEMICO FAMILIAR, TERAPIAS HUMANISTAS, PSIOANALISIS, TERAPIAS BREVES\n3. MEDICINA REGENERATIVA: Bioquímica funcional con micronutrientes\n4. Manejo básico nutricional en el contexto de las adicciones, nutrición clínica \n5. Manejo integral en alteraciones bucales, ATM,BRUXISMO, y terapia neural para nsiedad, bruxismo y ATM en el contexto de las adicciones, ozonoterapia para el uso en patología dental por uso de metanfetaminas, tabaco, etc\n 6.Farmacología de las adicciones\n 7. SALUD MENTAL\n 8. co-dependencia y co-adicto \n 9. Medicina integrativa\n 10. Epigenética\n 11. Medicina INTEGRATIVA II"
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


export default function Diplomados() {
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
   const [text, setText] = useState('Queremos darte un recorrido por nuestros diplomados.');
   const [isPaused, setIsPaused] = useState(false);
   const [speed, setSpeed] = useState(4000); // Velocidad inicial de 3 segundos
   const intervalRef = useRef(null);
 
   // Lista de textos que se mostrarán en el párrafo
   const texts = [
     'El Diplomado en MEDICINA REGENERATIVA, ESTÉTICA REGENERATIVA Y LONGEVIDAD. \n Este diplomado está dirigido a profesionales de la salud que estén interesados a obtener conocimientos prácticos en el ámbito de la medicina regenerativa, estética regenerativa, longevidad, nutrición y psicología en el contexto de la obesidad.',
     'Tenemos un enfoque integral, el curso de psicología es el mejor.',
     'Ayuda a tus pacientes a tener una larga vida longeva.',
     'El curso de tabaquismo te enseña a fumar, fumas o fumas.',
     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe error nulla doloribus neque repellat, omnis, facilis iusto dolor culpa excepturi natus architecto. Eum repellendus repudiandae voluptas nesciunt, eaque vel consectetur!',
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
    <div className="bg-white dark:bg-gray-800">
  <header className="bg-[#bca61c] dark:bg-gray-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-black dark:text-white text-xl font-bold"> {/* Modo claro por defecto: text-black */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="h-8" /> {/* Ajusta la altura según sea necesario */}
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-6">
        {/* Modo claro por defecto: text-black */}
        <Link href="/" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-yellow-400">Nosotros</Link>
        <Link href="/services" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-yellow-400">Diplomados</Link>
        <Link href="/contact" className="text-black hover:text-blue-600 dark:text-white dark:hover:text-yellow-400">Contacto</Link>
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        {/* Modo claro por defecto: text-black */}
        <button onClick={toggleMenu} className="text-black dark:text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}>
      {/* Modo claro por defecto: text-black */}
      <Link href="/" className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 mb-2">Inicio</Link>
      <Link href="/services" className="block text-black dark:text-white hover:text-blue-600 dark:hover:text-yellow-400 mb-2">Servicios</Link>
    </div>
  </header>

  <div className="relative">
    {/* Botón de desplazamiento a la izquierda */}
    <button
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full p-2 shadow-md z-10"
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
          className="min-w-[250px] md:min-w-[300px] lg:min-w-[400px] bg-white dark:bg-gray-700 shadow-md rounded-md cursor-pointer transform hover:scale-105 transition-transform duration-200"
          onClick={() => openPopup(course)}
        >
          <Image
            src={logo}
            alt={course.title}
            className="w-full h-32 md:h-48 object-cover rounded-t-md"
            height={300}
            width={300}
          />
          <div className="p-4">
            {/* Modo claro por defecto: text-black */}
            <h3 className="text-lg font-bold text-black dark:text-white">{course.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{course.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Botón de desplazamiento a la derecha */}
    <button
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full p-2 shadow-md z-10"
      onClick={scrollRight}
    >
      &#8250;
    </button>

    {/* Popup del temario */}
    {selectedCourse && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-70 z-50">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative">
          <button
            className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            onClick={closePopup}
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{selectedCourse.title}</h2>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Temario:</h3>
          <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300">{selectedCourse.syllabus}</pre>
        </div>
      </div>
    )}
  </div>

  {/* Texto cambiante */}
  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 space-y-4">
    <div className="bg-white dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-40 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-md">
      {/* Modo claro por defecto: text-black */}
      <p className="text-black dark:text-gray-300 text-lg font-medium">{text}</p>
    </div>
  </div>
</div>


  
  );
};

