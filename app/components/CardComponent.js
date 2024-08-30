'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Importa el hook de tema
import Image from 'next/image';
import imagen from '../../public/dna-blue.jpg';

const CardComponent = ({ course }) => {
  const { isDarkTheme } = useTheme(); // Obtén la variable isDarkTheme del contexto

  return (
    <div 
      id="card" 
      key={course.id} 
      className={`flex justify-center items-center p-4 w-full h-full ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-100'}`} // Eliminado 'absolute' y agregado 'w-full h-full'
    >
      <div className="flex flex-wrap justify-evenly w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <div className={`overflow-hidden m-2 rounded-lg shadow-lg ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
          <div className="h-48 w-full">
            <Image
              src={imagen}
              alt="rover"
              className="w-full h-full object-cover"
              height={500}
              width={500}
            />
          </div>
          <div className="p-5 flex flex-col justify-center items-start min-h-[250px]">
            <span className={`rounded-full text-xs px-3 py-1 uppercase cursor-pointer ${isDarkTheme ? 'bg-teal-600' : 'bg-teal-400 text-white'}`}>
              {course.tag}
            </span>
            <h4 className="text-lg font-bold mt-4 line-clamp-2">{course.title}</h4>
            <p className="text-sm mt-2 mb-8 line-clamp-3">
              {course.description}
            </p>
            <div className="flex items-center mt-auto">
              <Image
                src={course.src}
                alt="user"
                className="rounded-full w-10 h-10 mr-3"
                height={500}
                width={500}
              />
              <div className="text-sm">
                <h5 className="font-bold">{course.instructor}</h5>
                <small className={isDarkTheme ? 'text-gray-400' : 'text-gray-500'}>{course.start}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
