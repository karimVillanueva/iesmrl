import { useTheme } from '../context/ThemeContext';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaRegCopyright } from 'react-icons/fa'; // Icono de copyright de react-icons
import Nosotros from './Nosotros'

// Importar dinámicamente react-slick solo en el cliente
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Array de eventos de ejemplo
const events = [
  {
    title: 'Inicio del diplomado Diplomado en medicina regenerativa, estética regenerativa y longevidad',
    date: '2 27 de septiembre del 2024 ',
    description: 'Inicio de Diplomado.',
  },
  {
    title: 'Diplomado en tratamiento integral de la obesidad ',
    date: 'Proximamente',
    description: 'Diplomado sobre nuevos tratamientos en obesidad.',
  },
  {
    title: 'Diplomado en manejo integral de las adicciones',
    date: 'Proximamente',
    description: 'Manejo integral de adicciones.',
  },
  {
    title: 'Taller rejuvenecimiento facial 3D con ácido hialuronico',
    date: 'Proximamente',
    description: 'Taller.',
  },
];

export default function Newsletter() {
  // Usar el hook personalizado para obtener el estado del tema
  const { isDarkTheme, toggleTheme } = useTheme();

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="newsletters" className={`flex flex-col min-h-screen ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-[#eeebd4] text-gray-900'}`}>
      <Nosotros/>
      <div className="flex-grow flex items-center justify-center">
        <div id="newsletters" className="w-full max-w-3xl px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Eventos Principales de la Escuela de Medicina
          </h2>
          <Slider {...settings}>
            {events.map((event, index) => (
              <div key={index} className={`p-4 ${isDarkTheme ? 'bg-gray-700 text-gray-200' : 'bg-white'}`}>
                <div className={`border rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${isDarkTheme ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-white'}`}>
                  <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm mb-4 text-gray-400">{event.date}</p>
                  <p className="text-lg leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      <div className={`flex justify-between items-center p-4 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        {/* Botón de post anterior */}
        <Link href="#teachers" className={`flex flex-col items-start transition-colors duration-300 ${isDarkTheme ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
          <span className="text-sm uppercase text-gray-500">Anterior</span>
          <span className="font-bold">Nuestros docentes</span>
        </Link>

        {/* Botón de siguiente post */}
        <Link href="#header" className={`flex flex-col items-end transition-colors duration-300 ${isDarkTheme ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
          <span className="text-sm uppercase text-gray-500">Inicio</span>
          <span className="font-bold">Inicio</span>
        </Link>
      </div>

      <footer className={`w-full py-4 px-6 text-center transition-colors duration-300 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-900'}`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
          <div className="flex items-center text-sm md:text-base space-x-2">
            <FaRegCopyright /> {/* Icono de copyright */}
            <span>2024 Instituto de Estudios Superiores en Medicina Regenerativa y Longevidad</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
