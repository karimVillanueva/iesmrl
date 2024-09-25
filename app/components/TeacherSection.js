'use client';
// components/TeachersSection.js

import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Slider from 'react-slick'; 
// Configuración del carrusel
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const teachers = [
  { 
    id: 1, 
    name: 'Dr Roberto Dasaev Jasso Galván', 
    subject: 'Maestro en Adicciones',
    profileImage: 'https://drive.google.com/uc?export=download&id=10tXUFwm72yKIvE-LmL-bj32YBSq6uqM6', 
    bio: 'Médico de profesional con maestría en tratamiento integral de addciones con 10 años de experiencia',
    education: 'Intituto Politécnico Nacional',
    linkedin: 'https://www.linkedin.com/in/juan-perez'
  },
  { 
    id: 2, 
    name: 'Dr. Víctor', 
    subject: 'Maestro en Medicina Regenerativa',
    profileImage: 'https://drive.google.com/uc?export=download&id=10tXUFwm72yKIvE-LmL-bj32YBSq6uqM6',
    bio: 'Especialista en biología y química, comprometida con el aprendizaje práctico y la investigación científica.',
    education: 'Instituto Politécnico Nacional',
    linkedin: 'https://www.linkedin.com/in/maria-garcia'
  },
  { 
    id: 3, 
    name: 'Dra. Mara', 
    subject: 'Doctora en Medicina Regenerativa',
    profileImage: 'https://drive.google.com/uc?export=download&id=10uCAEg_eZskyndXw4nPXcbD2nOBdinBG',
    bio: 'Doctora en Medicina Regenerativa, docente en el Instituto Politécnico Nacional.',
    education: 'Universidad de Moscú',
    linkedin: 'https://www.linkedin.com/in/carlos-rodriguez'
  },
  { 
    id: 4, 
    name: 'Nutriólogo Cristóbal', 
    subject: 'Maestro en Nutriología',
    profileImage: 'https://drive.google.com/uc?export=download&id=10tXUFwm72yKIvE-LmL-bj32YBSq6uqM6',
    bio: 'Maestro especializado en nutrición con enfoque en la medicina regenerativa.',
    education: 'Universidad Nacional Autónoma de México',
    linkedin: 'https://www.linkedin.com/in/ana-martinez'
  },
  { 
    id: 5, 
    name: 'Maestra Patricia', 
    subject: 'Maestro en Psicología',
    profileImage: 'https://drive.google.com/uc?export=download&id=10uCAEg_eZskyndXw4nPXcbD2nOBdinBG',
    bio: 'Maestra especialista en adicciones, experiencia en grupos de AA.',
    education: 'Universidad Nacional Autónoma de México',
    linkedin: 'https://www.linkedin.com/in/ana-martinez'
  },
];

const TeachersSection = () => {
  const { isDarkTheme } = useTheme();
  return (
    <div id="teachers" className={`min-h-screen p-6 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-[#eeebd4] text-gray-900'}`}>
      <div className={`flex justify-center items-center mb-8 p-6 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-[#eeebd4] text-gray-900'}`}>
        <h1 className="text-2xl font-bold">Nuestros docentes</h1>
      </div>

      <Slider {...settings}>
        {teachers.map((teacher) => (
          <div key={teacher.id} className="p-4"> 
            <div className={`rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${
              isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            }`}>
              <Image
                src={teacher.profileImage}
                alt={teacher.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
                height={500}
                width={500}
              />
              <h3 className="text-lg font-semibold mb-1 text-center">{teacher.name}</h3>
              <p className="text-sm text-center text-gray-600 mb-2">{teacher.subject}</p>
              <p className="text-sm text-center text-gray-500 mb-2">{teacher.bio}</p>
              <p className="text-xs text-center text-gray-400 mb-4">{teacher.education}</p>
              {/* Enlace a LinkedIn */}
              <div className="flex justify-center">
                <Link href={teacher.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
                  <FaLinkedin className="mr-2" /> LinkedIn
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className={`flex justify-between items-center p-8 m-4 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        {/* Botón de post anterior */}
        <Link href="#carrousel" className={`flex flex-col items-start transition-colors duration-300 ${isDarkTheme ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>
          <span className="text-sm uppercase text-gray-500">Anterior</span>
          <span className="font-bold">Cursos</span>
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
