'use client';
// components/TeachersSection.js
import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { FaLinkedin } from 'react-icons/fa'; // Importar el ícono de LinkedIn
import Image from 'next/image';
import chapo from './images/chapo.jpeg';
import tony from './images/tony.webp';
import hitler from './images/hitler.jpg';
import dictador from './images/dictador.jpg';


const teachers = [
  { 
    id: 1, 
    name: 'chapo', 
    subject: 'Matemáticas',
    profileImage: {chapo},  // Asegúrate de tener esta imagen en tu carpeta de imágenes
    bio: 'Apasionado por los números y la educación, con más de 10 años de experiencia enseñando álgebra y geometría.',
    education: 'Universidad Nacional Autónoma de México',
    linkedin: 'https://www.linkedin.com/in/juan-perez'
  },
  { 
    id: 2, 
    name: 'tony', 
    subject: 'Ciencias',
    profileImage: {tony},
    bio: 'Especialista en biología y química, comprometida con el aprendizaje práctico y la investigación científica.',
    education: 'Universidad de Barcelona',
    linkedin: 'https://www.linkedin.com/in/maria-garcia'
  },
  { 
    id: 3, 
    name: 'hitle', 
    subject: 'Historia',
    profileImage: {hitler},
    bio: 'Amante de la historia y la arqueología, con un enfoque en la historia antigua y la civilización romana.',
    education: 'Universidad Complutense de Madrid',
    linkedin: 'https://www.linkedin.com/in/carlos-rodriguez'
  },
  { 
    id: 4, 
    name: 'dictador', 
    subject: 'Lengua',
    profileImage: {dictador},
    bio: 'Dedicada a la literatura y la lingüística, con un interés especial en la enseñanza del español como lengua extranjera.',
    education: 'Pontificia Universidad Católica de Chile',
    linkedin: 'https://www.linkedin.com/in/ana-martinez'
  },
];

const TeachersSection = () => {
  const { isDarkTheme } = useTheme();
  console.log(chapo)

  return (
    <div id="teachers" className={` min-h-screen p-6 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
    <div className="flex justify-center items-center mb-0 p-6">
        <h1 className="text-2xl font-bold">Nuestros docentes</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className={`p-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${
              isDarkTheme ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <Image
              src={chapo}
              alt={teacher.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 "
              height={500}
              width={500}
            />
            <h3 className="text-lg font-semibold mb-1">{teacher.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{teacher.subject}</p>
            <p className="text-sm text-gray-500 mb-2">{teacher.bio}</p>
            <p className="text-xs text-gray-400">{teacher.education}</p>
            {/* Enlace a LinkedIn */}
            <a 
              href={teacher.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:text-blue-700 flex justify-center items-center"
            >
              <FaLinkedin className="mr-2" /> {/* Icono de LinkedIn */}
              LinkedIn
            </a>
          </div>
        ))}
      </div>


      <div className={`flex justify-between items-center p-4 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {/* Botón de post anterior */}
      <Link href="#carrousel" className={`flex flex-col items-start transition-colors duration-300 ${isDarkTheme ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
        <span className="text-sm uppercase text-gray-500">Anterior</span>
        <span className="font-bold">Nuestros docentes</span>
      </Link>

      {/* Botón de siguiente post */}
      <Link href="#newsletters" className={`flex flex-col items-end transition-colors duration-300 ${isDarkTheme ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
        <span className="text-sm uppercase text-gray-500">Siguiente</span>
        <span className="font-bold">Noticias</span>
      </Link>
    </div>






    </div>
  );
};

export default TeachersSection;
