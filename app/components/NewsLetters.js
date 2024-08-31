import { useTheme } from '../context/ThemeContext';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Importar dinámicamente react-slick solo en el cliente
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


// Array de eventos de ejemplo
const events = [
  {
    title: 'Conferencia de Neurociencia',
    date: '2024-09-10',
    description: 'Una conferencia sobre los últimos avances en neurociencia.',
  },
  {
    title: 'Simposio de Cardiología',
    date: '2024-10-01',
    description: 'Discusión sobre nuevos tratamientos en cardiología.',
  },
  {
    title: 'Workshop de Anatomía',
    date: '2024-11-15',
    description: 'Taller práctico sobre anatomía humana.',
  },
];

export default function Newsletter() {
  // Usar el hook personalizado para obtener el estado del tema
  const { isDarkTheme } = useTheme();

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
    <div id="newsletters" className={`h-screen p-4 transition-colors duration-300 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-3xl font-bold mb-6 text-center">Eventos Principales de la Escuela de Medicina</h2>
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="p-4">
            <div className={`border ${isDarkTheme ? 'border-gray-700' : 'border-gray-200'} rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm mb-4 text-gray-400">{event.date}</p>
              <p className="text-lg leading-relaxed">{event.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className={`flex justify-between items-center p-4 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
         {/* Botón de post anterior */}
         <Link href="#header" className={`flex flex-col items-start transition-colors duration-300 ${isDarkTheme ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
        <span className="text-sm uppercase text-gray-500">Arriba</span>
        <span className="font-bold">Inicio</span>
      </Link>
      </div>
       
    </div>
  );
};

